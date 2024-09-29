import app from "./app.js"
import dbConnect from "./config/dbConnect.js"

const port = process.env.PORT || 50001

app.listen(port,async() => {
    await dbConnect()
    console.log(`server listening on: http://localhost:${port}`)
})