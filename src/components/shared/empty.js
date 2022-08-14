import {Stack} from "@mui/material";
import emptyBox from "../../assets/images/not-found.png";

const Empty = ({title, message, button}) => {

    return (
        <Stack direction="column" spacing={2} justifyContent="center">
            <Stack direction="row" justifyContent="center">
                <img
                    alt="Not found logo"
                    src={emptyBox}
                    style={{objectFit: 'cover', objectPosition: 'center', width: 250, height: 250}}
                />
            </Stack>
            {title}
            {message}
            {button}
        </Stack>
    )
}

export default Empty;
