import React from 'react'
import { Label } from '../ui/label'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import { Textarea } from '../ui/textarea'
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from '../ui/select'

const CommonForm = ({ formControls, formData, setFormData, onSubmit, buttonText }) => {

  const renderInputsByComponentType = (getControlItem) => {
    const value = formData[getControlItem.name] || ''

    switch (getControlItem.componentType) {
      case 'input':
        return (
          <Input
            name={getControlItem.name}
            placeholder={getControlItem.placeholder}
            id={getControlItem.name}
            type={getControlItem.type}
            value={value}
            onChange={event =>
              setFormData({ ...formData, [getControlItem.name]: event.target.value })
            }
          />
        )
      case 'select':
        return (
          <Select
            onValueChange={(value) =>
              setFormData({ ...formData, [getControlItem.name]: value })
            }
            value={value}
          >
            <SelectTrigger className='w-full'>
              <SelectValue placeholder={getControlItem.placeholder} />
            </SelectTrigger>
            <SelectContent>
              {getControlItem.options?.map((optionItem) => (
                <SelectItem key={optionItem.id} value={optionItem.id}>
                  {optionItem.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        )
      case 'textarea':
        return (
          <Textarea
            name={getControlItem.name}
            placeholder={getControlItem.placeholder}
            id={getControlItem.name}
            value={value}
            onChange={event =>
              setFormData({ ...formData, [getControlItem.name]: event.target.value })
            }
          />
        )
      default:
        return (
          <Input
            name={getControlItem.name}
            placeholder={getControlItem.placeholder}
            id={getControlItem.name}
            type={getControlItem.type}
            value={value}
            onChange={event =>
              setFormData({ ...formData, [getControlItem.name]: event.target.value })
            }
          />
        )
    }
  }

  return (
    <form onSubmit={(e) => {
      e.preventDefault()
      onSubmit()
    }}>
      <div className='flex flex-col gap-3'>
        {Array.isArray(formControls) && formControls.map((data) => (
          <div key={data.name} className='grid w-full gap-1.5'>
            <Label htmlFor={data.name} className='mb-1'>
              {data.label}
            </Label>
            {renderInputsByComponentType(data)}
          </div>
        ))}
      </div>
      <Button type='submit' className='mt-2 w-full'>
        {buttonText || 'Submit'}
      </Button>
    </form>
  )
}

export default CommonForm
