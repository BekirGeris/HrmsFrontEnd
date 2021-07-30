import React, { useState, useEffect } from "react";
import { Button, FormField, FormGroup, Icon, Input, Label, TextArea } from "semantic-ui-react";
import { Formik, Form, ErrorMessage, Field } from "formik";
import * as Yup from 'yup';
import CityService from "../../services/CityService";
import JobPositionService from "../../services/JobPositionService";
import JobAdvertisementService from "../../services/JobAdvertisementService";

export default function JobAdvertisementAdd() {

    const [jobPositions, setJobPositions] = useState([])
    const [cities, setCities] = useState([])

    useEffect(() => {
        let jobPositionService = new JobPositionService();
        let cityService = new CityService();
        jobPositionService.getJobPositions().then(result => setJobPositions(result.data.data));
        cityService.getCities().then(result => setCities(result.data.data));
    }, [])

    const initialValues = {
        jobPosition: "",
        jobDescription: "",
        jobTime: false,
        jobType: false,
        city: "",
        minSalary: "",
        maxSalary: "",
        numberOfOpenPositions: 0,
        lastApplicationDate: ""
    };

    const validationSchema = Yup.object({
        jobPosition: Yup.string()
        .required("Gerekli"),
        jobDescription: Yup.string()
            .required("Gerekli"),
        city: Yup.string()
        .required("Gerekli"),
        minSalary: Yup.number()
            .positive("Pozitif değer giriniz")
            .typeError("Sayısal değer giriniz")
            .required("Gerekli"),
        maxSalary: Yup.number()
            .positive("Pozitif değer giriniz")
            .typeError("Sayısal değer giriniz")
            .required("Gerekli"),
        numberOfOpenPositions: Yup.number()
            .positive("Pozitif değer giriniz")
            .typeError("Sayısal değer giriniz")
            .required("Gerekli"),
        lastApplicationDate: Yup.date()
            .min(new Date(), "Bu tarih seçilemez")
            .required("Gerekli"),
    });

    const onSubmit = values => {
        let jobAdvertisementService = new JobAdvertisementService();
        let data = {
            employerUser: {
                id: 1
            },
            jobPositions: values.jobPosition,
            jobDescription: values.jobDescription,
            fullTime: values.jobTime,
            remote: values.jobType,
            city: values.city,
            minSalary: values.minSalary,
            maxSalary: values.maxSalary,
            listingDate: values.listingDateü,
            numberOfOpenPositions: parseInt(values.numberOfOpenPositions, 10),
            lastApplicationDate: values.lastApplicationDate
        }
        jobAdvertisementService.addJob(data);
    };

    return (
        <div>
            <h1>İş İlanı Formu</h1>
            <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
                {props => (
                    <Form className="ui form">
                        <FormGroup widths="equal">
                            <FormField required control={Input} label="Şirket" width={4}>
                                <Field name="companyName" placeholder="Şirket Adınız"></Field>
                                <ErrorMessage
                                    name="companyName"
                                    render={(error) => (
                                        <Label
                                            icon="ban fitted"
                                            pointing="left"
                                            basic
                                            color="red"
                                            content={error}
                                        ></Label>
                                    )}
                                ></ErrorMessage>
                            </FormField>

                            <FormField required control={Input} label="Pozisyon" width={4}>
                                <Field name="jobPosition" placeholder="İş posizyonu"></Field>
                                <ErrorMessage
                                    name="jobPosition"
                                    render={(error) => (
                                        <Label
                                            icon="ban fitted"
                                            pointing="left"
                                            basic
                                            color="red"
                                            content={error}
                                        ></Label>
                                    )}
                                ></ErrorMessage>
                            </FormField>
                        </FormGroup>

                        <FormGroup>
                            <FormField required control={Input} label="Detay" width={16}>
                                <Field name="jobDescription" placeholder="İşin Tanımı"></Field>
                            </FormField>
                        </FormGroup>

                        <FormGroup>
                            <FormField required control={Input} label="Şehir" width={4}>
                                <Field name="city" placeholder="Şehir"></Field>
                                <ErrorMessage
                                    name="city"
                                    render={(error) => (
                                        <Label
                                            icon="ban fitted"
                                            pointing="left"
                                            basic
                                            color="red"
                                            content={error}
                                        ></Label>
                                    )}
                                ></ErrorMessage>
                            </FormField>

                            <FormField
                                required
                                control={Input}
                                label="Açık Posizyon Sayısı"
                                width={4}
                            >
                                <Field
                                    name="numberOfOpenPositions"
                                    placeholder="Aranan Eleman Sayısı"
                                ></Field>
                                <ErrorMessage
                                    name="numberOfOpenPositions"
                                    render={(error) => (
                                        <Label
                                            icon="ban fitted"
                                            pointing="left"
                                            basic
                                            color="red"
                                            content={error}
                                        ></Label>
                                    )}
                                ></ErrorMessage>
                            </FormField>

                            <FormField control={Input} required label="İş Türü" width={4}>
                                <Field name="jobType" as="select">
                                    <option value="office">Ofisten</option>
                                    <option value="remote">Uzaktan</option>
                                </Field>
                                <ErrorMessage
                                    name="jobType"
                                    render={(error) => (
                                        <Label
                                            icon="ban fitted"
                                            pointing="left"
                                            basic
                                            color="red"
                                            content={error}
                                        ></Label>
                                    )}
                                ></ErrorMessage>
                            </FormField>
                            <FormField required control={Input} label="Çalışma Süresi" width={4}>
                                <Field name="jobTime" as="select">
                                    <option value="part time">Yarı Zamanlı</option>
                                    <option value="full time">Tam Zamanlı</option>
                                </Field>
                            </FormField>
                        </FormGroup>

                        <FormGroup>
                            <FormField
                                required
                                control={Input}
                                label="Min Maaş"
                                width={4}
                            >
                                <Field name="minSalary" placeholder="Minimum"></Field>
                                <ErrorMessage
                                    name="minSalary"
                                    render={(error) => (
                                        <Label
                                            icon="ban fitted"
                                            pointing="left"
                                            basic
                                            color="red"
                                            content={error}
                                        ></Label>
                                    )}
                                ></ErrorMessage>
                            </FormField>

                            <FormField
                                required
                                control={Input}
                                label="Max Maaş"
                                width={4}
                            >
                                <Field name="maxSalary" placeholder="Maksimum"></Field>
                                <ErrorMessage
                                    name="maxSalary"
                                    render={(error) => (
                                        <Label
                                            icon="ban fitted"
                                            pointing="left"
                                            basic
                                            color="red"
                                            content={error}
                                        ></Label>
                                    )}
                                ></ErrorMessage>
                            </FormField>

                            <FormField
                                required
                                control={Input}
                                label="İlan Tarihi"
                                width={4}
                            >
                                <Field
                                    name="listingDate"
                                    placeholder="İş İlanı Yayınlama Tarihi"
                                ></Field>
                                <ErrorMessage
                                    name="listingDate"
                                    render={(error) => (
                                        <Label
                                            icon="ban fitted"
                                            pointing="left"
                                            basic
                                            color="red"
                                            content={error}
                                        ></Label>
                                    )}
                                ></ErrorMessage>
                            </FormField>

                            <FormField
                                required
                                control={Input}
                                width={4}
                                label="İlanın Bitiş Tarihi"
                            >
                                <Field
                                    name="applicationDeadline"
                                    placeholder="İlanın Son Tarihi"
                                ></Field>
                                <ErrorMessage
                                    name="applicationDeadline"
                                    render={(error) => (
                                        <Label
                                            icon="ban fitted"
                                            pointing="left"
                                            basic
                                            color="red"
                                            content={error}
                                        ></Label>
                                    )}
                                ></ErrorMessage>
                            </FormField>
                        </FormGroup>

                        <Button animated="fade" color="teal" type="submit">
                            <Button.Content visible>Yayımla</Button.Content>
                            <Button.Content hidden>
                                <Icon name="upload"/>
                            </Button.Content>
                        </Button>
                    </Form>
                )}
            </Formik>
        </div>
    );
}
