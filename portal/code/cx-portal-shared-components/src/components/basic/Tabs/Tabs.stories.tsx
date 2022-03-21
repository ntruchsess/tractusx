import { ComponentStory } from '@storybook/react'

import GroupOutlinedIcon from '@mui/icons-material/GroupOutlined'
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined'
import React from 'react'
import { Box } from '@mui/material'
import { ReactComponent } from '*.svg'
import { Tab } from './Tab'
import { TabPanel } from './TabPanel'
import { Tabs } from './Tabs'

function BaseTabs() {
  const [value, setValue] = React.useState(0)

  const handleChange = (event: any, newValue: number) => {
    setValue(newValue)
  }

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'border.border02' }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs usage"
        >
          <Tab
            label="Single User"
            icon={<PersonOutlinedIcon />}
            iconPosition="start"
          />
          <Tab
            label="Multiple User"
            icon={<GroupOutlinedIcon />}
            iconPosition="start"
          />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        Content Single User
      </TabPanel>
      <TabPanel value={value} index={1}>
        Content Multiple User
      </TabPanel>
    </Box>
  )
}

export default {
  title: 'Tabs',
  parameters: {
    docs: {
      description: {
        component:
          'Tabs are used the same way as described in the [MUI Tabs](https://mui.com/components/tabs/) documentation with [MUI Tabs](https://mui.com/api/tabs/), [MUI Tab](https://mui.com/api/tab/) and TabPanel components. Implementation for handleChange-method needs to be done yourself.' +
          '    \n' +
          '    \n' +
          '    Example:\n' +
          '    const [value, setValue] = React.useState(0)\n' +
          '    const handleChange = (event: any, newValue: number) => {\n' +
          '      setValue(newValue)\n' +
          '    }',
      },
      source: {
        code:
          "<Box sx={{ width: '100%' }}>\n" +
          "  <Box sx={{ borderBottom: 1, borderColor: 'border.border02' }}>\n" +
          '    <Tabs\n' +
          '      value={value}\n' +
          '      onChange={handleChange}\n' +
          '      aria-label="basic tabs usage"\n' +
          '    >\n' +
          '      <Tab\n' +
          '        label="Single User"\n' +
          '        icon={<PersonOutlinedIcon />}\n' +
          '        iconPosition="start"\n' +
          '      />\n' +
          '      <Tab\n' +
          '        label="Multiple User"\n' +
          '        icon={<GroupOutlinedIcon />}\n' +
          '        iconPosition="start"\n' +
          '      />\n' +
          '    </Tabs>\n' +
          '  </Box>\n' +
          '  <TabPanel value={value} index={0}>\n' +
          '    Content Single User\n' +
          '  </TabPanel>\n' +
          '  <TabPanel value={value} index={1}>\n' +
          '    Content Multiple User\n' +
          '  </TabPanel>\n' +
          '</Box>',
        language: 'jsx',
        type: 'auto',
      },
    },
  },
}

const Template: ComponentStory<typeof ReactComponent> = () => <BaseTabs />

export const Base = Template.bind({})
