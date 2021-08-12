import { Form, Formik } from 'formik';
import React from 'react'
import * as Yup from 'yup';
import { FormGroup } from 'semantic-ui-react';
import CVService from '../../services/CVService';
import HRMSTextInput from "../../utilities/customFormControls/HRMSTextInput";

export default function CvAdd() {

    const initialValue = {
        firstName: "",
        lastName: "",
        eMail: "",
        birthDay: "",
        schools: "",
        coverLetter: "",
        languages: "",
        programmingSkills: "",
        jobExperiences: "",
        image: null,
        socialMediaAccounts: ""
    }

    const validationSchema = Yup.object({
        firstName: Yup.string()
            .required("Gerekli"),
        lastName: Yup.string()
            .required("Gerekli"),
        eMail: Yup.string()
            .required("Gerekli"),
        birthDay: Yup.date()
            .required("Gerekli"),
        schools: Yup.string()
            .required("Gerekli"),
        coverLetter: Yup.string()
            .required("Gerekli"),
        languages: Yup.string()
            .required("Gerekli"),
        programmingSkills: Yup.string()
            .required("Gerekli"),
        jobExperiences: Yup.string()
            .required("Gerekli"),
        image: Yup.string()
            .required("Gerekli"),
        socialMediaAccounts: Yup.string()
            .required("Gerekli")
    })

    const onSubmit = values => {
        let cvService = new CVService();
        let data = {
            firstName: values.firstName,
            lastName: values.lastname,
            eMail: values.eMail,
            birthDay: values.birthDay,
            schools: values.schools,
            coverLetter: values.coverLetter,
            languages: values.languages,
            programmingSkills: values.programmingSkills,
            jobExperiences: values.jobExperiences,
            image: values.image,
            socialMediaAccounts: values.socialMediaAccounts
        }
        cvService.addCV(data);
    };

    return (
        <div>
            <h1>Cv Formu</h1>
             <Formik initialValues={initialValue} validationSchema={validationSchema} onSubmit={onSubmit}>
                <Form className="ui form">
                    <FormGroup widths="equal">
                    <HRMSTextInput name="firstName" placeholder="Bekir" label="Ad"/>
                    <HRMSTextInput name="lastName" placeholder="Geriş" label="Soyad"/>
                    </FormGroup>
                </Form>
             </Formik>
        </div>
    )
}
