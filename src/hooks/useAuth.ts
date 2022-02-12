import axios from "axios";
import { useCallback, useState } from "react";
import { useHistory } from "react-router-dom";

import { User } from "../types/user";
import { useMessage } from "./useMessage";

export const useAuth = () => {
  const history = useHistory();
  const { showMessage } = useMessage();

  const [loading, setLoading] = useState(false);

  const login = useCallback(
    (id: string) => {
      setLoading(true);
      axios
        .get<User>(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then((res) => {
          if (res.data) {
            showMessage({ title: "ログインしました", status: "success" });
            history.push("/home");
          } else {
            // alert("ユーザーが見つかりません");
          }
        })
        // .catch(() => alert("ログインできません"))
        .catch(() =>
          showMessage({ title: "ログインできません", status: "error" })
        )
        .finally(() => setLoading(false));
    },
    // [history]
    [history, showMessage]
  );
  // return { login };
  return { login, loading };
};
