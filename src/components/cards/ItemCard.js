import React from 'react';
import { Link } from 'react-router-dom';

import { Card, CardContent, CardMedia, makeStyles, Typography } from '@material-ui/core';

import { Button } from 'custom-components';

import { parsePath } from 'utils/helpers';

const useStyles = makeStyles((theme) => ({
    audioPlayer: {
        margin: '20px 0'
    },
    root: {
        maxWidth: '100%'
    },
    cardImage: {
        height: '150px',
        backgroundSize: 'contain',
        margin: '10px'
    },
    cardContent: {
        width: '100%',
        padding: '10px',
        '& .card-content': {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            width: '95%',
            '& .card-meta': {
                display: 'flex',
                alignItems: 'center',
                color: theme.palette.text.secondary,
                '& .MuiTypography-root': {
                    fontSize: '.88rem',
                    textTransform: 'capitalize',
                    fontWeight: 600
                },
                '& span': {
                    display: 'flex',
                    justifyContent: 'center',
                    fontSize: '20px',
                    color: theme.palette.background.default,
                    width: '33px',
                    height: '33px',
                    backgroundColor: theme.palette.primary.main,
                    borderRadius: '50%',
                    marginRight: '10px'
                }
            },
            '& .card-title': {
                fontSize: '18px',
                color: theme.palette.text.primary,
                fontWeight: 600,
                textTransform: 'capitalize',
                marginTop: '24px',
                marginBottom: '5px',
                '& i': {
                    color: '#40cc6f',
                    '& svg': {
                        marginTop: '-3px'
                    }
                }
            },

            '& .card-sub': {
                fontSize: '15px',
                color: '#808996',
                fontWeight: 400,
                maxHeight: '70px',
                overflow: 'hidden'
            },
            '& .card-content-btn': {
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginTop: '20px'
            }
        }
    }
}));

const ItemCard = ({ btnText, item }) => {
    const classes = useStyles();

    if (!item) return null;

    const { audio, logo, projectId, author, title, lyrics } = item;

    return (
        <Card className={classes.root}>
            <CardMedia className={classes.cardImage} image={parsePath(logo)} />
            <CardContent className={classes.cardContent}>
                <Link to={parsePath(`/projects/${projectId}`)} className="card-content">
                    {author && (
                        <Link to={parsePath(`/users/${author.uid}`)} className="card-meta">
                            {author?.logo && <span>{author?.logo}</span>}
                            <Typography variant="h5">{author?.name}</Typography>
                        </Link>
                    )}
                    <Typography variant="h4" className="card-title">
                        {title}
                    </Typography>
                    <Typography variant="body1" className="card-sub">
                        {lyrics}
                    </Typography>
                    {audio && (
                        <div className={classes.audioPlayer}>
                            <audio controls>
                                <source src={audio.src} type={audio.type} />
                            </audio>
                        </div>
                    )}
                    {btnText && <Button>{btnText}</Button>}
                </Link>
            </CardContent>
        </Card>
    );
};

export default ItemCard;
