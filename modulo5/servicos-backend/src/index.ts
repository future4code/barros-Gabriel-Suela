import app from "./app";
import createUser from "./endpoints/createUser";
import getFilterAddress from "./endpoints/getFilterAddress";

app.post("/user", createUser);
app.get("/address/:cep", getFilterAddress);