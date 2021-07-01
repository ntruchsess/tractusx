// THIS CODE AND INFORMATION IS PROVIDED AS IS WITHOUT WARRANTY OF
// ANY KIND, EITHER EXPRESSED OR IMPLIED, INCLUDING BUT NOT LIMITED TO
// THE IMPLIED WARRANTIES OF MERCHANTABILITY AND/OR FITNESS FOR A
// PARTICULAR PURPOSE.
//
// Copyright (c) Microsoft. Licensed under MIT licence.
//

// eslint-disable-next-line
import * as React from 'react';
import { DefaultButton, Modal, PrimaryButton } from '@fluentui/react';
import { observable } from 'mobx';
import { observer } from 'mobx-react';

interface IProp {
  message: string;
  button1Text: string;
  button1Action: () => void;
  button2Text?: string;
  button2Action?: () => void;
  isGlobal?: boolean;
  isSave?: boolean;
}

@observer
export default class AlertDialog extends React.Component<IProp> {
  @observable private isVisible = false;
  public static global: AlertDialog;
  public static save: AlertDialog;
  public navUrl: string;
  private message: string;
  private title: string;

  constructor(props: any) {
    super(props);
    if (this.props.isGlobal) {
      AlertDialog.global = this;
    }
    if (this.props.isSave) {
      AlertDialog.save = this;
    }
    this.message = this.props.message;
  }

  public setMessage(message: string) {
    this.message = message;
  }

  public show(visible: boolean, title?: string, message?: string) {
    if (message && message.indexOf('No server on localhost') >= 0) {
      return;
    }
    this.title = title;
    this.message = message || this.message;
    this.isVisible = visible;
  }

  public render() {
    return (
      <Modal isOpen={this.isVisible} containerClassName='w440' scrollableContentClassName='df h100pc'>
        <div className='p44'>
          {this.title && <h1 className='fs24 lh32 fw600 mt0 mb20'>{this.title}</h1>}
          <h2 className='fs24 lh32 fw600 mt0 mb20'>{this.message}</h2>
          <div className='df jcfe'>
            <PrimaryButton text={this.props.button1Text} onClick={() => this.props.button1Action()} />
            {this.props.button2Text && <DefaultButton className='ml10' text={this.props.button2Text} onClick={() => this.props.button2Action()} />}
          </div>
        </div>
      </Modal>
    );
  }
}
