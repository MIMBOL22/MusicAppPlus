package main

import (
	"context"
	"crypto/md5"
	"encoding/hex"
	"io"
	"log"
	"net/http"
	"net/http/httputil"
	"strings"
	"time"
)

type App struct {
	ctx context.Context
}

func NewApp() *App {
	return &App{}
}

func setupCORS(w *http.ResponseWriter, req *http.Request) {
	(*w).Header().Set("Access-Control-Allow-Origin", "*")
	(*w).Header().Set("Access-Control-Allow-Methods", "POST, GET, OPTIONS, PUT, DELETE")
	(*w).Header().Set("Access-Control-Allow-Headers", "Accept, Content-Type, Content-Length, Accept-Encoding, X-CSRF-Token, Authorization")
}

func (a *App) startup(ctx context.Context) {
	a.ctx = ctx
	log.Println("starting server")

	//on every request call this handler
	log.Fatal(http.ListenAndServe(":9000", http.HandlerFunc(func(rw http.ResponseWriter, r *http.Request) {

		setupCORS(&rw, r)
		if (*r).Method == "OPTIONS" {
			return
		}

		endpoint := "https://api.music.yandex.ru"

		if strings.Contains(r.URL.Path, "file-download-info") {
			endpoint = "https://storage.mds.yandex.net"
		}

		//create a new request
		req, err := http.NewRequest(r.Method, endpoint+r.URL.Path, r.Body)
		if err != nil {
			panic(err)
		}

		//Set the request headers as whatever was passed by caller
		req.Header = r.Header.Clone()

		//Set the query parameters
		req.URL.RawQuery = r.URL.RawQuery

		//create a http client, timeout should be mentioned or it will never timeout.
		client := http.Client{
			Timeout: 5 * time.Second,
		}

		//Get dump of our request
		reqData, err := httputil.DumpRequest(req, true)
		if err != nil {
			panic(err)
			return
		}

		log.Println("Forward Request Data", string(reqData))

		//Actually forward the request to our endpoint
		resp, err := client.Do(req)
		if err != nil {
			panic(err)
			return
		}
		defer resp.Body.Close()

		//Get dump of our response
		respData, err := httputil.DumpResponse(resp, true)
		if err != nil {
			panic(err)
			return
		}

		log.Println("Forward Request Response", string(respData))

		//Copy the response headers to the actual response. DO THIS BEFORE CALLING WRITEHEADER.
		for k, v := range resp.Header {
			rw.Header()[k] = v
		}

		//set the statuscode whatever we got from the response
		rw.WriteHeader(resp.StatusCode)

		//Copy the response body to the actual response
		_, err = io.Copy(rw, resp.Body)
		if err != nil {
			log.Println(err)
			rw.Write([]byte("error"))
			return
		}

	})))
}

func (a *App) GetMD5(text string) string {
	hash := md5.Sum([]byte(text))
	return hex.EncodeToString(hash[:])
}
