import { Field, useField } from 'formik'
import React from 'react'
import { FormField, Input, Label } from 'semantic-ui-react'

export default function HRMSTextInput({ ...props }) {
    const [field, meta] = useField(props)

    return (
        <FormField error={meta.touched && !!meta.error}>
            <label>{props.label}</label>
            <Field {...field} {...props} />
            {meta.touched && !!meta.error ? (
                <Label
                    icon="ban fitted"
                    pointing="above"
                    basic
                    color="red"
                    content={meta.error}>
                </Label>
            ) : null}
        </FormField>
    )
}
