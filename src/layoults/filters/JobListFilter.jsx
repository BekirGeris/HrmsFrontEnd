import React, { useEffect, useState } from 'react'
import CityService from '../../services/CityService';
import JobPositionService from '../../services/JobPositionService';
import { Label, Dropdown, Segment, Checkbox, Button } from 'semantic-ui-react'

export default function JobListFilter({ clickEvent }) {

    const [cities, setCities] = useState([]);
    const [jobPositions, setJobPositions] = useState([]);

    useEffect(() => {
        let cityService = new CityService()
        cityService.getCities().then(result => setCities(result.data.data))

        let jobPositionService = new JobPositionService()
        jobPositionService.getJobPositions().then(result => setJobPositions(result.data.data))

    }, [])

    const [cityIndex, setCityIndex] = useState([])
    const handleChangeCity = (e, { value }) => {
        setCityIndex(value)
    }

    const [jobPositionIndex] = useState([])
    const handleChangeJobPosition = (e, { value, checked }) => {
        if (checked) {
            jobPositionIndex.push(value)
        } else {
            let index = jobPositionIndex.indexOf(value)
            if (index > -1) {
                jobPositionIndex.splice(index, 1)
            }
        }
    }

    return (
        <div>
            <Segment color="black" raised>
                <Label size="large">Şehir</Label>
                <Dropdown
                    placeholder="Şehir seçiniz"
                    selection
                    search
                    multiple
                    clearable
                    options={cities.map((city, index) => {
                        return { text: city.cityName, key: city.index, value: city.id }
                    })}
                    onChange={handleChangeCity}
                    value={cityIndex}
                />
            </Segment>
            <Segment color="black" raised>
                <Label attached="top" size="large">İş Pozisyonu</Label>
                {
                    jobPositions.map(jobPosition => (
                        <Checkbox
                            key={jobPosition.id}
                            label={jobPosition.jobName}
                            onChange={handleChangeJobPosition}
                            value={jobPosition.id}
                        />
                    ))
                }
            </Segment>
            <Segment color="black" raised>
                <Label attached="top" size="large">Çalışma Yeri</Label>

                <Checkbox
                    key={1}
                    label="Uzaktan"
                    onChange={handleChangeJobPosition}
                    value={1}
                />
                <Checkbox
                    key={2}
                    label="Ofisten"
                    onChange={handleChangeJobPosition}
                    value={2}
                />

            </Segment>
            <Segment color="black" raised>
                <Label attached="top" size="large">Çalışma Süresi</Label>
                <Checkbox
                    key={1}
                    label="Tam Zamanlı"
                    onChange={handleChangeJobPosition}
                    value={1}
                />
                <Checkbox
                    key={2}
                    label="Yarı Zamanlı"
                    onChange={handleChangeJobPosition}
                    value={2}
                />
            </Segment>
            <Button
                type="button"
                fluid
                color="green"
                onClick={() => clickEvent({ cityId: cityIndex, jobPositionId: jobPositionIndex })}
            >
                Filtrele
            </Button>
        </div>
    )
}
