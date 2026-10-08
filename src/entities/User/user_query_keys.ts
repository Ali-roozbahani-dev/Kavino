export const user_query_keys = {
    all: ["user"],
    details: ()=> [...user_query_keys.all , "details"]
}