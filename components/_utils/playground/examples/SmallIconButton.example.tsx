import * as React from 'react';

import {SmallIconButton} from '../../../index/index';

export default (props: any) => {

    const onClick = (e: React.MouseEvent<HTMLInputElement>) => {
        console.log(e.target);
    };

    return(
        <fieldset style={{display: 'inline-block'}}>
            <legend>Small Icon Button Element</legend>
            <SmallIconButton onClick={onClick} icon={'notifications'}/>
            <SmallIconButton onClick={onClick} icon={'close'} disabled />
            <SmallIconButton onClick={onClick} icon={'add'} inverseStyle />
            <SmallIconButton onClick={onClick} icon={'search'} inverseStyle disabled />
            <SmallIconButton onClick={onClick} icon={'remove'}/>
            <SmallIconButton onClick={onClick} icon={'account'} inverseStyle/>
            <SmallIconButton onClick={onClick} icon={'build'} inverseStyle/>
            <SmallIconButton onClick={onClick} icon={'alarm'} disabled/>
            <SmallIconButton onClick={onClick} icon={'done'} inverseStyle/>
            <SmallIconButton onClick={onClick} icon={'favorite'} inverseStyle/>
            <SmallIconButton onClick={onClick} icon={'home'}/>
            <SmallIconButton onClick={onClick} icon={'power'} inverseStyle disabled/>
            <SmallIconButton onClick={onClick} icon={'settings'} />
            <SmallIconButton onClick={onClick} icon={'verified'} disabled/>
            <SmallIconButton onClick={onClick} icon={'visibility'}/>
            <SmallIconButton onClick={onClick} icon={'visibility off'} inverseStyle/>
            <SmallIconButton onClick={onClick} icon={'loop'}/>
            <SmallIconButton onClick={onClick} icon={'play'} inverseStyle disabled/>
            <SmallIconButton onClick={onClick} icon={'pause'}/>
            <SmallIconButton onClick={onClick} icon={'stop'}/>
            <SmallIconButton onClick={onClick} icon={'email'} inverseStyle/>
            <SmallIconButton onClick={onClick} icon={'mail outline'} disabled/>
            <SmallIconButton onClick={onClick} icon={'forum'}/>
            <SmallIconButton onClick={onClick} icon={'message'}/>
            <SmallIconButton onClick={onClick} icon={'create'} inverseStyle/>
            <SmallIconButton onClick={onClick} icon={'block'}/>
            <SmallIconButton onClick={onClick} icon={'send'} inverseStyle disabled/>
            <SmallIconButton onClick={onClick} icon={'download'}/>
            <SmallIconButton onClick={onClick} icon={'upload'} inverseStyle/>
            <SmallIconButton onClick={onClick} icon={'left'}/>
            <SmallIconButton onClick={onClick} icon={'right'} inverseStyle/>
            <SmallIconButton onClick={onClick} icon={'dropdown'} disabled/>
            <SmallIconButton onClick={onClick} icon={'refresh'} inverseStyle/>
            <SmallIconButton onClick={onClick} icon={'sync'}/>
            <SmallIconButton onClick={onClick} icon={'group'}/>
            <SmallIconButton onClick={onClick} icon={'person add'} inverseStyle disabled/>
            <SmallIconButton onClick={onClick} icon={'notifications'}/>
            <SmallIconButton onClick={onClick} icon={'check box'} inverseStyle/>
            <SmallIconButton onClick={onClick} icon={'check box off'} inverseStyle/>
        </fieldset>
    );
};
