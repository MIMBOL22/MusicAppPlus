import useLocalStorage from "use-local-storage";
import {fetcher} from "./fetcher.ts";
import useSWR from 'swr'
import {AccountStatus, AvatarInfo} from "./interfaces/AccountStatus.ts";
import {AccountAuthStatus, AccountInfo} from "../interfaces/AccountInfo.ts";
import {useEffect} from "react";

export function useYMInit(token: string = "") {
    const [ymToken, _] = useLocalStorage("ym_token",token);
    const [initInfo, setInitInfo] = useLocalStorage<AccountInfo>("init_info", {})

    const y_avatar = useSWR<AvatarInfo, string>(['/info?format=json', ymToken], fetcher);
    const ym_status = useSWR<AccountStatus, string>(['/account/status', ymToken], fetcher);

    useEffect(() => {
        console.log("ym",ym_status.data, ym_status.isLoading, ym_status.error)
        console.log("ya",y_avatar.data, y_avatar.isLoading, y_avatar.error)
        if (
            ym_status.error ||
            y_avatar.error ||
            ym_status.data === undefined ||
            y_avatar.data === undefined
        ) {
            setInitInfo({
                auth_status: AccountAuthStatus.error
            });
            return;
        }

        if (y_avatar.isLoading || ym_status.isLoading) {
            setInitInfo({
                auth_status: AccountAuthStatus.loading
            });
            return;
        }


        setInitInfo({
            auth_status: AccountAuthStatus.success,
            firstName: ym_status.data.account.firstName,
            secondName: ym_status.data.account.secondName,
            uid: ym_status.data.account.uid || 0,
            default_avatar_id: "https://avatars.yandex.net/get-yapic/" + y_avatar.data.default_avatar_id + "/islands-retina-50",
            is_avatar_empty: y_avatar.data.is_avatar_empty,
            login: ym_status.data.account.login
        })
    }, [
        y_avatar.error,
        y_avatar.data,
        y_avatar.isLoading,
        ym_status.data?.account.firstName,
        ym_status.data?.account.secondName,
        ym_status.data?.account.uid,
        ym_status.error,
        ym_status.isLoading
    ]);

    return initInfo;
}