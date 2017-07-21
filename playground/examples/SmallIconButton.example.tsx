import * as React from 'react';

import {Fieldset, SmallIconButton} from '../../components/index/index';

export default (props: any) => {

    const onClick = (e: React.MouseEvent<HTMLInputElement>) => {
        console.log(e.target);
    };

    return(
        <Fieldset legend="Small Icon Button" style={{display: 'inline-block'}}>
            <SmallIconButton onClick={onClick} icon={'notifications'}/>
            <SmallIconButton onClick={onClick} icon={'close'} disabled />
            <SmallIconButton onClick={onClick} icon={'add'} transparent />
            <SmallIconButton onClick={onClick} icon={'search'} transparent disabled />
            <SmallIconButton onClick={onClick} icon={'remove'}/>
            <SmallIconButton onClick={onClick} icon={'account circle'} transparent/>
            <SmallIconButton onClick={onClick} icon={'build'} transparent/>
            <SmallIconButton onClick={onClick} icon={'alarm'} disabled/>
            <SmallIconButton onClick={onClick} icon={'done'} transparent/>
            <SmallIconButton onClick={onClick} icon={'favorite'} transparent/>
            <SmallIconButton onClick={onClick} icon={'home'}/>
            <SmallIconButton onClick={onClick} icon={'power settings new'} transparent disabled/>
            <SmallIconButton onClick={onClick} icon={'settings'} />
            <SmallIconButton onClick={onClick} icon={'verified user'} disabled/>
            <SmallIconButton onClick={onClick} icon={'visibility'}/>
            <SmallIconButton onClick={onClick} icon={'visibility off'} transparent/>
            <SmallIconButton onClick={onClick} icon={'loop'}/>
            <SmallIconButton onClick={onClick} icon={'play arrow'} transparent disabled/>
            <SmallIconButton onClick={onClick} icon={'pause'}/>
            <SmallIconButton onClick={onClick} icon={'stop'}/>
            <SmallIconButton onClick={onClick} icon={'email'} transparent/>
            <SmallIconButton onClick={onClick} icon={'mail outline'} disabled/>
            <SmallIconButton onClick={onClick} icon={'forum'}/>
            <SmallIconButton onClick={onClick} icon={'message'}/>
            <SmallIconButton onClick={onClick} icon={'create'} transparent/>
            <SmallIconButton onClick={onClick} icon={'block'}/>
            <SmallIconButton onClick={onClick} icon={'send'} transparent disabled/>
            <SmallIconButton onClick={onClick} icon={'file download'}/>
            <SmallIconButton onClick={onClick} icon={'file upload'} transparent/>
            <SmallIconButton onClick={onClick} icon={'keyboard arrow left'}/>
            <SmallIconButton onClick={onClick} icon={'keyboard arrow right'} transparent/>
            <SmallIconButton onClick={onClick} icon={'arrow drop down'} disabled/>
            <SmallIconButton onClick={onClick} icon={'refresh'} transparent/>
            <SmallIconButton onClick={onClick} icon={'sync'}/>
            <SmallIconButton onClick={onClick} icon={'group'}/>
            <SmallIconButton onClick={onClick} icon={'person add'} transparent disabled/>
            <SmallIconButton onClick={onClick} icon={'notifications'}/>
            <SmallIconButton onClick={onClick} icon={'check box'} transparent/>
            <SmallIconButton onClick={onClick} icon={'check box outline blank'} transparent/>
            <SmallIconButton onClick={onClick} icon={'content copy'} transparent/>
            <SmallIconButton onClick={onClick} icon={'import export'}/>
        </Fieldset>
    );
};
