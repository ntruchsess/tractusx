// components/simple-dropzone.component.js
import {useEffect} from "react";
import Dropzone from 'react-dropzone-uploader'
import 'react-dropzone-uploader/dist/styles.css'
import { useTranslation } from 'react-i18next';
import FooterButton from "./footerButton";
import {connect} from 'react-redux';
import {IState} from "../types/store/redux.store.types";
import {addCurrentStep} from "../actions/user.action";
import { withRouter } from 'react-router-dom';
import {Dispatch} from 'redux';
import { uploadDocument } from "../helpers/utils";

interface DragDropProps {
  currentActiveStep: number;
  addCurrentStep: (step: number) => void;
}

export const DragDrop = ({currentActiveStep, addCurrentStep}: DragDropProps) => {
  const { t } = useTranslation();


    // Return the current status of files being uploaded
    const handleChangeStatus = ({ meta, file }, status) => { console.log(status, meta, file) }

    // Return array of uploaded files after submit button is clicked
    const handleSubmit = async (files, allFiles) => {
        console.log(files.map(f => f.meta))
        let res = await uploadDocument(files);
        console.log(res);
        // allFiles.forEach(f => f.remove())
    }

  const backClick = () => {
    addCurrentStep(currentActiveStep-1)
  }

  const nextClick = () => {
    addCurrentStep(currentActiveStep+1)
  }

    return (
      <>
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
            onChangeStatus={handleChangeStatus}
            onSubmit={handleSubmit}
            accept="image/*,audio/*,video/*"
        />
        </div>
        </div>
         <FooterButton 
         labelBack={t('button.back')}
         labelNext={t('button.next')}
         handleBackClick={() => backClick()}
         handleNextClick={() => nextClick()}
      />
      </>
    );
};

const mapDispatchToProps = (dispatch: Dispatch) => ({
  addCurrentStep: (step: number) => {
      dispatch(addCurrentStep(step));
  },
});


export default withRouter(connect(
  (state: IState) => ({
      currentActiveStep: state.user.currentStep,
  }),
  mapDispatchToProps
)(DragDrop));
