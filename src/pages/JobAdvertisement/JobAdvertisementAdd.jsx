import React, { useState, useEffect } from "react";
import { Button, FormField, FormGroup, Icon, Input, Label, TextArea } from "semantic-ui-react";
import { Formik, Form, ErrorMessage, Field } from "formik";
import * as Yup from 'yup';
import CityService from "../../services/CityService";
import JobPositionService from "../../services/JobPositionService";
import JobAdvertisementService from "../../services/JobAdvertisementService";
import HRMSTextInput from "../../utilities/customFormControls/HRMSTextInput";

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
        companyName: "",
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
        companyName: Yup.string()
            .required("Gerekli"),
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
        listingDate: Yup.date()
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
                <Form className="ui form" >
                    <FormGroup widths="equal">
                        <HRMSTextInput name="companyName" placeholder="Şirket Adınız" label="Şirket" />
                        <HRMSTextInput name="jobPosition" placeholder="İş posizyonu" label="Pozisyon" />
                    </FormGroup>

                    <FormGroup widths="equal">
                        <HRMSTextInput name="jobDescription" placeholder="İşin Tanımı" label="Detay" />
                    </FormGroup>

                    <FormGroup widths="equal">
                        <HRMSTextInput name="city" placeholder="Şehir" label="Şehir" />
                        <HRMSTextInput name="numberOfOpenPositions" placeholder="Aranan Eleman Sayısı" label="Açık Posizyon Sayısı" />
                        <FormField control={Input} required label="İş Türü">
                            <Field name="jobType" as="select">
                                <option value="office">Ofisten</option>
                                <option value="remote">Uzaktan</option>
                            </Field>
                        </FormField>
                        <FormField required control={Input} label="Çalışma Süresi">
                            <Field name="jobTime" as="select">
                                <option value="part time">Yarı Zamanlı</option>
                                <option value="full time">Tam Zamanlı</option>
                            </Field>
                        </FormField>
                    </FormGroup>

                    <FormGroup widths="equal">
                        <HRMSTextInput name="minSalary" placeholder="Minimum" label="Min Maaş"/>
                        <HRMSTextInput name="maxSalary" placeholder="Maksimum" label="Max Maaş"/>
                        <HRMSTextInput name="listingDate" placeholder="İlanın Tarihi" label="İlan Tarihi"/>
                        <HRMSTextInput name="lastApplicationDate" placeholder="İlanın Son Tarihi" label="İlanın Bitiş Tarihi"/>
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
    );
}
