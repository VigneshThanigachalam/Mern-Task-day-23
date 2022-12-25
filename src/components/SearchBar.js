import React from "react";
import Card from "@mui/material/Card";
import { useState } from "react";
import CardHeader from "@mui/material/Card";
import { Button, CardActions, CardContent, Typography } from "@mui/material";
import { TextField, Stack, Box, HelperText } from "@mui/material";
export const SearchBar = (prop) => {
    const [nameError, setNameError] = useState("");
    const [markError, setMarkError] = useState();
    const add = () => {
        if (prop.name == "" && prop.mark == "") {
            setMarkError("mark is blank");
            setNameError("name is blank");
        } else if (prop.name == "") {
            setNameError("name is blank");
        } else if (prop.mark == "") {
            setMarkError("mark is blank");
        } else {
            prop.setId((a) => a + 1);
            prop.sa((prev) => [
                ...prev,
                { id: prop.id, name: prop.name, mark: prop.mark },
            ]);
            prop.setName("");
            prop.setMark("");
        }
    };

    return (
        <Box width="600px" mx={"auto"} my={3}>
            <Card>
                <CardContent>
                    <Stack rowGap={2}>
                        <TextField
                            label="Name"
                            value={prop.name}
                            onChange={(e) => {
                                prop.setName(e.target.value);
                                setNameError("");
                            }}
                            error={nameError}
                            helperText={!prop.name ? nameError : ""}
                        />

                        <TextField
                            label="Mark"
                            value={prop.mark}
                            type="number"
                            onChange={(e) => {
                                prop.setMark(e.target.value);
                                setMarkError("");
                            }}
                            error={markError}
                            helperText={!prop.mark ? markError : ""}
                        />
                    </Stack>
                </CardContent>
                <CardActions>
                    <Box mx={"auto"}>
                        <Button
                            variant="contained"
                            onClick={(e) =>
                                e.target.value === "ADD"
                                    ? add()
                                    : prop.update(prop.name, prop.mark)
                            }
                            value={prop.btnlabel}
                        >
                            {prop.btnlabel}
                        </Button>
                    </Box>
                </CardActions>
            </Card>
        </Box>
    );
};
