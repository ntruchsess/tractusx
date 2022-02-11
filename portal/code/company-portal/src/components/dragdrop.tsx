// components/simple-dropzone.component.js
import React from "react";
import Dropzone from 'react-dropzone-uploader'
import 'react-dropzone-uploader/dist/styles.css'
import { useTranslation } from 'react-i18next';


const DragDrop = () => {
  const { t } = useTranslation();

    // Payload data and url to upload files
    const getUploadParams = ({ meta }) => { return { url: 'https://httpbin.org/post' } }

    // Return the current status of files being uploaded
    const handleChangeStatus = ({ meta, file }, status) => { console.log(status, meta, file) }

    // Return array of uploaded files after submit button is clicked
    const handleSubmit = (files, allFiles) => {
        console.log(files.map(f => f.meta))
        allFiles.forEach(f => f.remove())
    }

    return (

      <div className="mx-auto col-9 container-registration">
        <div className="head-section">
          <div className="mx-auto step-highlight d-flex align-items-center justify-content-center">
            4
          </div>
          <h4 className="mx-auto d-flex align-items-center justify-content-center">
          {t('documentUpload.title')}
          </h4>
          <div className="mx-auto text-center col-9">
          {t('documentUpload.subTitle')}
          </div>
        </div>
        <div className="companydata-form mx-auto col-9">
        <Dropzone
            getUploadParams={getUploadParams}
            onChangeStatus={handleChangeStatus}
            onSubmit={handleSubmit}
            accept="image/*,audio/*,video/*"
        />
        </div>
        </div>
    );
};

export default DragDrop;