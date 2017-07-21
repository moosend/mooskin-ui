import * as React from 'react';

import Fieldset from '../../../components/Fieldset';
import {SmallIconButton} from '../../../components/index';
import styles from './ReactLiveEditor.css';

import {
  LiveEditor,
  LiveError,
  LivePreview,
  LiveProvider
} from 'react-live';

export interface IReactLiveEditorProps{
    code: string;
    scope: {[key: string]: any};
    title: string;
}

export interface IReactLiveEditorState{
    displayEditor: boolean;
}

export default class ReactLiveEditor extends React.Component<IReactLiveEditorProps, IReactLiveEditorState> {

    public state = {
        displayEditor: false
    };

    public render(){

        const displayEditor = this.state.displayEditor ? 'block' : 'none';
        const zIndex = this.state.displayEditor ? 22 : 'auto';

        return(
            <div>
                <div className={styles.overlay} style={{display: displayEditor}} onClick={this.onToggle}/>
                <Fieldset style={{zIndex}} >
                    <legend>
                        {this.props.title}
                        <span style={{color: '#e6e6e6', fontWeight: 800}}> - </span>
                        <SmallIconButton
                            icon="mode edit"
                            transparent
                            style={{margin: '0px 0px 5px'}}
                            onClick={this.onToggle}
                        />
                        <span style={{color: '#bbb'}}>Edit</span>
                    </legend>
                    <LiveProvider code={this.props.code} scope={this.props.scope}>
                        <div className={styles.editor} style={{display: displayEditor}}>
                            <div onClick={this.onToggle} className={styles.closeBtn}>X</div>
                            <LiveEditor style={{height: '100%', width: 700}} />
                        </div>
                         <LiveError />
                        <LivePreview />
                    </LiveProvider>
                </Fieldset>
            </div>
        );
    }

    public onToggle = () => {
        this.setState({displayEditor: !this.state.displayEditor});
    }
}
