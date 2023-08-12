import {getDocument} from '@/firebase/db/dbMethods.js'
export default async function getData(req, res) {
    const {method, headers} = req;
    if (method != "GET") {
        res.status(404);
        res.json({page: "Not found"});
        return;
    }
    let {result, error} = await getDocument("users",headers["email"]);
    res.status(200);
    res.json(result.data());

}