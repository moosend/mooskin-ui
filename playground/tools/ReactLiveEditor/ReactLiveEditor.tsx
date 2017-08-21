import * as React from 'react';

import showdown from 'showdown';

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
    doc: string;
}

export interface IReactLiveEditorState{
    displayEditor: boolean;
    displayDocs: boolean;
    docHtml: string;
}

export default class ReactLiveEditor extends React.Component<IReactLiveEditorProps, IReactLiveEditorState> {

    state: IReactLiveEditorState;
    domParser: DOMParser;
    converter: showdown.Converter;

    constructor(props: IReactLiveEditorProps){
        super(props);

        // showdown.setFlavor('github');
        showdown.setOption('customizedHeaderId', 'true');

        this.converter = new showdown.Converter();
        this.domParser = new DOMParser();

        const docHtml = this.getDocs(this.props.doc || '');

        this.state = {
            displayDocs: false,
            displayEditor: false,
            docHtml
        };
    }

    render(){

        const displayEditor = this.state.displayEditor ? 'block' : 'none';
        const displayDocs = this.state.displayDocs ? 'block' : 'none';
        const displayDocsLabel = this.state.displayDocs ? 'Hide' : 'Show';
        const zIndex = this.state.displayEditor ? 22 : 'auto';

        return(
            <div>
                <div className={styles.overlay} style={{display: displayEditor}} onClick={this.onToggle}/>
                <Fieldset style={{zIndex}} >
                    <legend>
                        {this.props.title}
                        <span style={{color: '#e6e6e6', fontWeight: 800}}> - </span>
                        <span className={styles.edit} onClick={this.onToggle}>
                            <SmallIconButton
                                className={styles.edit}
                                icon="mode edit"
                                transparent
                                style={{margin: '0px 0px 5px'}}
                            />
                            Edit Code
                        </span>
                    </legend>
                    <LiveProvider code={this.props.code} scope={this.props.scope}>
                        <div className={styles.editor} style={{display: displayEditor}}>
                            <div onClick={this.onToggle} className={styles.closeBtn}>X</div>
                            <LiveEditor style={{height: '100%', width: 700}} />
                        </div>
                        <LiveError />
                        <LivePreview />
                    </LiveProvider>
                    <div style={{display: this.props.doc && 'block' || 'none'}}>
                        <div
                            style={{display: displayDocs}}
                            className={styles.propDocs}
                            dangerouslySetInnerHTML={{__html: this.state.docHtml}}
                        />
                        <div className={styles.showProps} onClick={this.onToggleDocs}>
                            {displayDocsLabel} Possible Props
                        </div>
                        <div style={{clear: 'both'}}/>
                    </div>
                </Fieldset>
            </div>
        );
    }

    onToggle = () => {
        this.setState({displayEditor: !this.state.displayEditor});
    }

    onToggleDocs = () => {
        this.setState({displayDocs: !this.state.displayDocs});
    }

    // method to extract only the docs we need from the readme
    getDocs = (wholeDocs: string) => {

        const html = this.domParser.parseFromString(this.converter.makeHtml(wholeDocs), 'text/html');

        const docsSection = html.querySelector('.playground-doc');

        const doc = docsSection && this.converter.makeHtml(docsSection.innerHTML || '');

        if (!doc){
            console.warn(`No proper docs, or doc structure found for this example '${this.props.title}'`);
        }

        return doc || '';
    }
}

/**
 *
 * @param componentName name of the component as a string
 * @param components array of React component classes to be passed as scope dependencies to the react live editor
 */
export const renderEditableExample =
    (componentName: string, components: {[key: string]: any}) => {

        return (
            <ReactLiveEditor
                scope={{React, ...components}}
                code={require(`../../examples/${componentName}.example.txt`)}
                title={`${componentName} Example`}
                doc={require(`../../../components/${componentName}/README.md`)}
            />
        );
    };
