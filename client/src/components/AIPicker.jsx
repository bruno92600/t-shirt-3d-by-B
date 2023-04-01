import React from 'react'

import CustomButton from './CustomButton'

const AIPicker = ({ prompt, setPrompt, generatingImg, handleSubmit }) => {
  return (
    <div className='aipicker-container'>
      <textarea
      placeholder='Demandez à IA...'
      rows={5}
      value={prompt}
      onChange={(e) => setPrompt(e.target.value)}
      className='aipicker-textarea'
      />
      <div className='flex flex-wrap gap-3'>
        {generatingImg ? (
          <CustomButton
          type='outline'
          title='Demandez à IA...'
          customStyles="text-xs"
          />
        ) : (
          <>
          <CustomButton
          type='outline'
          title='Logo IA'
          handleClick={() => handleSubmit('logo')}
          customStyles="text-xs"
          />
          <CustomButton
          type='filled'
          title='Image IA'
          handleClick={() => handleSubmit('full')}
          customStyles="text-xs"
          />
          </>
        )}
      </div>
    </div>
  )
}

export default AIPicker