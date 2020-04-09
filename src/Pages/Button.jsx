import React from 'react';
import Button from '@rakuten-rex/button';
import OutlineButton from '@rakuten-rex/button/OutlineButton';
import PillButton from '@rakuten-rex/button/PillButton';
import PillOutlineButton from '@rakuten-rex/button/PillOutlineButton';
import LinkButton from '@rakuten-rex/button/LinkButton';
import PillLinkButton from '@rakuten-rex/button/PillLinkButton';
// default
import ButtonDiv from '@rakuten-rex/button/Button/ButtonDiv';
import ButtonInput from '@rakuten-rex/button/Button/ButtonInput';
import ButtonLink from '@rakuten-rex/button/Button/ButtonLink';
// outline
import OutlineButtonDiv from '@rakuten-rex/button/OutlineButton/OutlineButtonDiv';
import OutlineButtonInput from '@rakuten-rex/button/OutlineButton/OutlineButtonInput';
import OutlineButtonLink from '@rakuten-rex/button/OutlineButton/OutlineButtonLink';
// pill
import PillButtonDiv from '@rakuten-rex/button/PillButton/PillButtonDiv';
import PillButtonInput from '@rakuten-rex/button/PillButton/PillButtonInput';
import PillButtonLink from '@rakuten-rex/button/PillButton/PillButtonLink';
// pill outline
import PillOutlineButtonDiv from '@rakuten-rex/button/PillOutlineButton/PillOutlineButtonDiv';
import PillOutlineButtonInput from '@rakuten-rex/button/PillOutlineButton/PillOutlineButtonInput';
import PillOutlineButtonLink from '@rakuten-rex/button/PillOutlineButton/PillOutlineButtonLink';
// link button
import LinkButtonDiv from '@rakuten-rex/button/LinkButton/LinkButtonDiv';
import LinkButtonInput from '@rakuten-rex/button/LinkButton/LinkButtonInput';
import LinkButtonLink from '@rakuten-rex/button/LinkButton/LinkButtonLink';
// pill link button
import PillLinkButtonDiv from '@rakuten-rex/button/PillLinkButton/PillLinkButtonDiv';
import PillLinkButtonInput from '@rakuten-rex/button/PillLinkButton/PillLinkButtonInput';
import PillLinkButtonLink from '@rakuten-rex/button/PillLinkButton/PillLinkButtonLink';


export default function Index() {
  return (
    <>
      <h1>Button</h1>
      <h2>Default</h2>
      <Button>
        Click me
      </Button>
      <h2>OutlineButton</h2>
      <OutlineButton>
        Click me
      </OutlineButton>
      <h2>PillButton</h2>
      <PillButton>
        Click me
      </PillButton>
      <h2>PillOutlineButton</h2>
      <PillOutlineButton>
        Click me
      </PillOutlineButton>
      <h2>LinkButton</h2>
      <LinkButton>
        Click me
      </LinkButton>
      <h2>PillLinkButton</h2>
      <PillLinkButton>
        Click me
      </PillLinkButton>
      <h2>Theme</h2>
      <Button style={{
        "--rex-button-theme-background": "#CB0085",
        "--rex-button-theme-text": "#fff",
        "--rex-button-theme-border": "#CB0085",
        "--rex-button-theme-hover-background": "#EF0AA1",
        "--rex-button-theme-hover-text": "#fff",
        "--rex-button-theme-hover-border": "#EF0AA1",
        "--rex-button-theme-active-background": "#A2006A",
        "--rex-button-theme-active-text": "#fff",
        "--rex-button-theme-active-border": "#A2006A",
        "--rex-button-theme-focus-background": "#A2006A",
        "--rex-button-theme-focus-text": "#fff",
        "--rex-button-theme-focus-border": "#A2006A",
        "--rex-button-border-radius": "0.25rem",
        "--rex-button-padding-top-bottom": "0.75rem",
        "--rex-button-padding-left-right": "2rem"
      }}>
        Default State
      </Button>
      <h2>HTML tags</h2>
      <div>
        <Button>
          Button Tag
        </Button>
        {' '}
        <ButtonDiv>
          Div Tag
        </ButtonDiv>
        {' '}
        <ButtonInput>
          Input Tag
        </ButtonInput>
        {' '}
        <ButtonLink href='/'>
          Link Tag with href
        </ButtonLink>
      </div>
      <br />
      <div>
        <OutlineButton>
          Button Tag
        </OutlineButton>
        {' '}
        <OutlineButtonDiv>
          Div Tag
        </OutlineButtonDiv>
        {' '}
        <OutlineButtonInput>
          Input Tag
        </OutlineButtonInput>
        {' '}
        <OutlineButtonLink href='/'>
          Link Tag with href
        </OutlineButtonLink>
      </div>
      <br />
      <div>
        <PillButton>
          Button Tag
        </PillButton>
        {' '}
        <PillButtonDiv>
          Div Tag
        </PillButtonDiv>
        {' '}
        <PillButtonInput>
          Input Tag
        </PillButtonInput>
        {' '}
        <PillButtonLink href='/'>
          Link Tag with href
        </PillButtonLink>
      </div>
      <br />
      <div>
        <PillOutlineButton>
          Button Tag
        </PillOutlineButton>
        {' '}
        <PillOutlineButtonDiv>
          Div Tag
        </PillOutlineButtonDiv>
        {' '}
        <PillOutlineButtonInput>
          Input Tag
        </PillOutlineButtonInput>
        {' '}
        <PillOutlineButtonLink href='/'>
          Link Tag with href
        </PillOutlineButtonLink>
      </div>
      <br />
      <div>
        <LinkButton>
          Button Tag
        </LinkButton>
        <LinkButtonDiv>
          Div Tag
        </LinkButtonDiv>
        <LinkButtonInput>
          Input Tag
        </LinkButtonInput>
        <LinkButtonLink href='/'>
          Link Tag with href
        </LinkButtonLink>
      </div>
      <br />
      <div>
        <PillLinkButton>
          Button Tag
        </PillLinkButton>
        <PillLinkButtonDiv>
          Div Tag
        </PillLinkButtonDiv>
        <PillLinkButtonInput>
          Input Tag
        </PillLinkButtonInput>
        <PillLinkButtonLink href='/'>
          Link Tag with href
        </PillLinkButtonLink>
      </div>
    </>
  );
}
