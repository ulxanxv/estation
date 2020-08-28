'use strict';

import ExtReactDOM from '@sencha/ext-react-modern';
import {
    FieldSet,
    FormPanel,
    TextField,
    PasswordField,
    Button,
    Container,
    Toolbar
} from '@sencha/ext-react-modern';

const React = require('react');

class App extends React.Component {
    render() {
        return (
            <Container platformConfig={{
                    phone: {
                        layout: 'fit'
                    },
                    "!phone": {
                        layout: 'center',
                        padding: 10,
                        top: 0,
                        right: 0,
                        left: 0,
                        bottom: 0,
                        margin: 'auto',
                        position: 'absolute'
                    }
                }}>
                <FormPanel width="300px" ref={form => this.form = form} shadow padding="20" platformConfig={{
                        "!phone": {
                            maxHeight: 500,
                            width: 350
                        }
                    }}>
                    <FieldSet title="Authorization" defaults={{labelAlign: "placeholder"}}>
                        <TextField label="Login" required placeholder="This field is required"/>
                        <PasswordField label="Password" required revealable/>
                    </FieldSet>
                    <Toolbar shadow={false} docked="bottom" layout={{ type: 'hbox', pack: 'right' }}>
                        <Button text="Sign in" margin="0 10 0 0" />
                        <Button text="Reset" handler={() => this.form.cmp.reset()} />
                    </Toolbar>
                </FormPanel>
            </Container>
        );
    }
}


const Ext = window['Ext'];

Ext.onReady(() => {
    ExtReactDOM.render(<App/>, document.getElementById('react'));
    Ext.getBody().setStyle({
        'background-image': 'url(img/background.jpg)'
    });
});
