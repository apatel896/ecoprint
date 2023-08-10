import { writeData } from "@/firebase/db/dbMethods.js"

export default async function addData(req, res) {
    const { method, body } = req;
    if (method != "POST") {
        res.status = 404;
        res.json({page: "Not found"});
        return;
    }
    let {result, error} = await writeData("users", "firstUser", body);
    res.status(200);
    res.json({hello: "Hello"});
    


    
}