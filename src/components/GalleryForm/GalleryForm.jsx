import {useState} from 'react';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import AddAPhotoIcon from '@material-ui/icons/AddAPhoto';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/styles';


const useStyles = makeStyles({
    field: {
        width: 700
    }
})

function GalleryForm({postPhoto}) {

    let [newPhotoPath, setNewPhotoPath] = useState('');
    let [newPhotoDescription, setNewPhotoDescription] = useState('');
    let [newPhotoLikes, setNewPhotoLikes] = useState(0);

    const classes = useStyles();

    const onFormSubmit = (event) => {
        event.preventDefault();

        let newPhoto = {
            path: newPhotoPath,
            description: newPhotoDescription,
            likes: newPhotoLikes
        }

        postPhoto(newPhoto);
        setNewPhotoPath('');
        setNewPhotoDescription('');
        setNewPhotoLikes(0);
    }

    return (
        <>
        <Typography
            variant="h5"
            color="secondary"
        >ADD MORE PHOTOS
        </Typography>
        <form 
            noValidate
            autoComplete="off"
            onSubmit={onFormSubmit}>
            <Typography
                variant="h5"
            >URL:
            </Typography>
            <TextField
                className={classes.field}
                label="photo url goes here"
                variant="outlined"
                required
                value={newPhotoPath}
                onChange={event => setNewPhotoPath(event.target.value)}
            />
            <Typography
                variant="h5"
            >DESCRIPTION:
            </Typography>            
            <TextField
                className={classes.field}
                label="describe your photo here"
                variant="outlined"
                required
                multiline
                maxRows={4}
                value={newPhotoDescription}
                onChange={event => setNewPhotoDescription(event.target.value)}
            />
            <div>
                <Button
                    variant="text"
                    color="default"
                    size="large"
                    onClick={onFormSubmit}
                    endIcon={<AddAPhotoIcon />}
                >Add Photo
                </Button>
            </div>
        </form>
        </>
    )
}

export default GalleryForm;