// Copyright (c) 2021 Microsoft
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

// eslint-disable-next-line
import React, { Component } from 'react';
import { ActionButton, DefaultButton, PrimaryButton } from '@fluentui/react';
import { observer } from 'mobx-react';
import { resizedataURL } from '../helpers/utils';

interface IProp {
  className?: string;
  multiple?: boolean;   // Allow multi-file select (only works with onChangeFileList, not onChange)
  /**
   * Caption text of the button
   */
  text?: string;
  /**
   * If you are uploading an image, setting width/height will resize the image
   */
  imageWidth?: number;
  /**
   * If you are uploading an image, setting width/height will resize the image
   */
  imageHeight?: number;
  /**
   * List of file types you want to accept (eg '.png,.jpg,.jpeg')
   */
  acceptFileTypes?: string;
  /**
   * Name of the icon you want to display on the buttong (or empty for no icon) - defaults to 'Upload'
   */
  iconName?: string;
  /**
   * The type of button you want - Action/Default/Primary
   */
  buttonType?: 'Default' | 'Primary' | 'Action';
  /**
   * OnChange - called when the user selects a file
   * onChange(file, name) => file=contents of the file as bas64, name=the name of the file the user picked
   */
  onChange?: (file: string, name: string) => void;

  onChangeFileList?: (files: FileList) => void;
}

/**
 * Upload Button component.
 * Wraps the browser upload element in a custom button
 */
@observer
export class UploadButton extends Component<IProp> {
  private input: HTMLInputElement;

  private uploadClick() {
    this.input.value = '';
    this.input.disabled = false;
    this.input.click();
    this.input.disabled = true;
  }

  private thumbnailChange() {
    if (this.props.onChangeFileList) {
      this.props.onChangeFileList(this.input.files);
    } else {
      if (this.input.files && this.input.files.length === 1) {
        const reader = new FileReader();
        reader.onload = (file) => this.onLoad(file);
        reader.readAsArrayBuffer(this.input.files[0]);
      }
    }
  }

  private async onLoad(file: any) {
    if (file.currentTarget && file.currentTarget.readyState === 2) {
      const buf = Buffer.from(file.currentTarget.result, 'binary');
      let ret = buf.toString('base64');
      if (this.input.files && this.input.files.length > 0 && (this.input.files[0].type === 'image/jpeg' || this.input.files[0].type === 'image/png')) {
          ret = `data:${this.input.files[0].type};base64,${ret}`;
          if (this.props.imageWidth && this.props.imageHeight) {
            ret = await resizedataURL(ret, this.props.imageWidth, this.props.imageHeight);
          }
      } else {
        ret = buf.toString();
      }

      if (this.props.onChange) {
        this.props.onChange(ret, this.input.files[0].name);
      }
    }
  }

  public render() {
    const className = this.props.className || '';
    const text = this.props.text || '';
    let accept = this.props.acceptFileTypes || '.png,.jpg,.jpeg';
    if (accept === '*') {
      accept = undefined;
    }
    const inputStyle: React.CSSProperties = { position: 'absolute', top: 0, left: 0, pointerEvents: 'none', opacity: 0 };
    const iconName = this.props.iconName === undefined ? 'Upload' : this.props.iconName;  // Allow empty string for icon name
    const buttonType = this.props.buttonType || 'Action';
    return (
      <>
        {buttonType === 'Action' && <ActionButton className={className} text={text} iconProps={{ iconName }} onClick={() => this.uploadClick()} />}
        {buttonType === 'Primary' && <PrimaryButton className={className} text={text} iconProps={{ iconName }} onClick={() => this.uploadClick()} />}
        {buttonType === 'Default' && <DefaultButton className={className} text={text} iconProps={{ iconName }} onClick={() => this.uploadClick()} />}
        <input title='fileUploader' ref={(ref) => this.input = ref} style={inputStyle} type='file' accept={accept}
          disabled multiple={this.props.multiple} onChange={() => this.thumbnailChange()} />
      </>);
  }
}
