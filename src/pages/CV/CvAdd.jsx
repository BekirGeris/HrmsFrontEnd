import { Form, Formik } from 'formik';
import React from 'react'
import * as Yup from 'yup';
import { Button, FormGroup, Icon } from 'semantic-ui-react';
import CVService from '../../services/CVService';
import HRMSTextInput from "../../utilities/customFormControls/HRMSTextInput";
import { InputFile } from 'semantic-ui-react-input-file'
import { Image } from 'semantic-ui-react'

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
            <div>
                <Image src='https://react.semantic-ui.com/images/wireframe/image.png' size='large' wrapped />
                <h6></h6>
                <InputFile
                    input={{
                        id: 'input-control-id',
                    }}
                />
            </div>
            <Formik initialValues={initialValue} validationSchema={validationSchema} onSubmit={onSubmit}>
                <Form className="ui form">

                    <FormGroup widths="equal">
                        <HRMSTextInput name="firstName" placeholder="Bekir" label="Ad" />
                        <HRMSTextInput name="lastName" placeholder="Geriş" label="Soyad" />
                    </FormGroup>

                    <FormGroup widths="equal">
                        <HRMSTextInput name="eMail" placeholder="Begersgames@gmail.com" label="E-mail" />
                        <HRMSTextInput name="birthDay" placeholder="11/11/2021" label="Doğum Tarihi" />
                    </FormGroup>

                    <FormGroup widths="equal">
                        <HRMSTextInput name="schools" placeholder="Marmara Universitesi" label="Universite" />
                        <HRMSTextInput name="coverLetter" placeholder="Çalışmayı severim vb." label="Özet" />
                    </FormGroup>

                    <FormGroup widths="equal">
                        <HRMSTextInput name="languages" placeholder="Türkçe, Almanca vb." label="Diller" />
                        <HRMSTextInput name="programmingSkills" placeholder="Java, React, Formik vb." label="Bilgisayar Bilgisi" />
                    </FormGroup>

                    <FormGroup widths="equal">
                        <HRMSTextInput name="jobExperiences" placeholder="2 yıl software deeloper vb." label="İş Tecrübei" />
                        <HRMSTextInput name="socialMediaAccounts" placeholder="BekirGeris-Github vb." label="Sosyal Medya" />
                    </FormGroup>

                    <Button animated="fade" color="teal" type="submit">
                        <Button.Content visible>Yayımla</Button.Content>
                        <Button.Content hidden>
                            <Icon name="upload" />
                        </Button.Content>
                    </Button>
                </Form>
            </Formik>
        </div>
    )
}
