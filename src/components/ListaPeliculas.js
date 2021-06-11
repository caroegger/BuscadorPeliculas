import {Link} from "react-router-dom";

import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import InfoIcon from '@material-ui/icons/Info';

const ListaPeliculas = ({peliculas, titulo}) => {
    
//     return (
//         <>
//         <Box bgcolor="primary.main" p={1}>
//             <Typography variant="h4">{titulo}</Typography>
//         </Box>
//         <List>
//             <ListItem>
//                 <div>
//                     {peliculas && peliculas.map( (pelicula) => (
//                             <ListItemAvatar key={pelicula.title}>
//                                 <Avatar src={`https://image.tmdb.org/t/p/w500/${pelicula.poster_path}`} />
//                                 <h3>{pelicula.title}
//                                 </h3>
//                             </ListItemAvatar>
//                         ))
//                     }
//                 </div>
//             </ListItem>
//         </List>
//         </>
//     )
// }

return (
    <>
    <Box bgcolor="primary.main" p={1}>
        <Typography variant="h4">{titulo}</Typography>
    </Box>
    <List>
        <ListItem>
            <div>
                {peliculas && peliculas.map( (pelicula) => (
                        <>
                        <ListItemAvatar>
                            <Avatar src={`https://image.tmdb.org/t/p/w500/${pelicula.poster_path}`} />
                            <h3>{pelicula.title}
                            </h3>
                        </ListItemAvatar>
                            <Link to={`/detalle/${pelicula.id}`}>
                        </Link>
                        <IconButton>
                            <Link to={`/pelicula-info/${pelicula.id}`}>
                            <InfoIcon />
                            </Link>
                        </IconButton>
                        </>
                    ))
                }
            </div>
        </ListItem>
    </List>
    </>
)
}

export default ListaPeliculas