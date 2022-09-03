import AuthLayout from "../../components/layout/auth-layout";
import {useParams} from "react-router";
import {useEffect} from "react";
import {useDispatch} from "react-redux";
import {STORY_ACTION_CREATORS} from "../../redux/features/story/story-slice";
import {useSnackbar} from "notistack";

const StoryDetailAuthPage = () => {

    const {storyID} = useParams();
    const dispatch = useDispatch();
    const {enqueueSnackbar} = useSnackbar();

    const showMessage = (message, options) => {
        enqueueSnackbar(message, options);
    }

    useEffect(() => {
        dispatch(STORY_ACTION_CREATORS.getStory({id: storyID, showMessage}));
    }, [storyID]);

    return (
        <AuthLayout>

        </AuthLayout>
    )
}
export default StoryDetailAuthPage;
