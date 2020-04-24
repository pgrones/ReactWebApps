import {Card, CardContent, CardMedia, Typography} from "@material-ui/core";
import React from "react";
import withStyles from "@material-ui/core/styles/withStyles";

type Props ={
    title: string,
    url: string,
};

const StyledCard = withStyles({
    root: {
        minHeight: 180,
        maxHeight: 365,
        width: 500,
        background: 'linear-gradient(70deg, #FE6B8B 30%, #FF8E53 90%)',
        margin: 10,
        boxShadow: '-4px 8px 15px 2px #2a2f36',
        transition: 'opacity 1s ease-in-out'
    }
})(Card);

const StyledMedia = withStyles({
    root: {
        height: 285
    }
})(CardMedia);

export const CardComponent = ({url, title}: Props) =>{
    return(
        <StyledCard>
                <StyledMedia
                    image={url}
                    title={title}
                />
                <CardContent>
                    <Typography variant="body2">
                        {(title && title.trim().length) ? title : 'Untitled'}
                    </Typography>
                </CardContent>
        </StyledCard>
    )
};
