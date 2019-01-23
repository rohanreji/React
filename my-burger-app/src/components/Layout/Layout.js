import React from 'react';
import Aux from '../../hoc/Au';
import classes from './Layout.css'

const layout = (props) => (
    <Aux>
        <div>Toolbar, SideDrawer, Backdrop</div>
        <main className={classes.content}>
            {props.children}
        </main>
    </Aux>
);

export default layout;

// The <main> tag specifies the main content of a document.
// The content inside the <main> element should be unique to the document. 
// It should not contain any content that is repeated across documents such as sidebars, navigation links, 
// copyright information, site logos, and search forms.
