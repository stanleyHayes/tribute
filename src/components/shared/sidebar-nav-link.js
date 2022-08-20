import {Link, useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {changePath} from "../../redux/features/ui/ui-slice";
import {Button, Stack} from "@mui/material";

const SidebarNavLink = ({path, label, active, icon}) => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleClick = () => {
        dispatch(changePath(path));
        navigate(path);
    }

    return (
        <Link to={path} onClick={handleClick} style={{textDecoration: 'none'}}>
            <Stack
                sx={{
                    backgroundColor: active ? 'light.secondary' : false, padding: 0.5,
                    borderBottomRightRadius: 4,
                    borderTopRightRadius: 8,
                    borderBottomLeftRadius: 8,
                    borderTopLeftRadius: 4,
                    pl: 2
                }}
                direction="row" alignItems="center" spacing={2}>
                {icon}
                <Button
                    sx={{
                        textTransform: 'capitalize',
                        color: active ? 'secondary.main' : 'text.secondary',
                        fontWeight: active ? 'bold' : 'normal',
                    }} size="small">
                    {label}
                </Button>
            </Stack>
        </Link>
    )
}

export default SidebarNavLink;
