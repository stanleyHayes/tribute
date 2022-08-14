import {Link} from "react-router-dom";
import {Button} from "@mui/material";
import {useDispatch} from "react-redux";
import {changePath} from "../../redux/features/ui/ui-slice";

const NavLink = ({path, label, active}) => {

    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch(changePath(path));
    }
    return (
        <Link to={path} onClick={handleClick} style={{textDecoration: 'none'}}>
            <Button
                size="large"
                variant="text"
                sx={{
                    borderBottomRightRadius: 4,
                    borderTopRightRadius: 12,
                    borderBottomLeftRadius: 12,
                    borderTopLeftRadius: 4,
                    color: active ? 'text.active' : 'text.inactive',
                    backgroundColor: active ? 'light.active' : false,
                    textTransform: 'capitalize',
                }}>
                {label}
            </Button>
        </Link>
    )
}

export default NavLink;
