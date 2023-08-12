import { writeData } from "@/firebase/db/dbMethods.js"


export default async function addData(req, res) {
    const { method, body } = req;
    const header = req.headers;
    console.log(JSON.stringify(header));
    if (method != "POST") {
        res.status = 404;
        res.json({page: "Not found"});
        return;
    }
    let {result, error} = await writeData("users", header["email"], body);
    res.status(200);
    res.json({hello: "Hello"});
    


    
}