import { Divider, Link, List, ListItem, useTheme } from '@mui/material'

interface UserNavItem {
  link: string
  title: string
  divider?: boolean
}

interface UserNavProps {
  items: UserNavItem[]
}

export const UserNav = ({ items }: UserNavProps) => {
  const { spacing } = useTheme()

  return (
    <>
      <List sx={{ padding: spacing(0, 1) }}>
        {items?.map(({ link, title, divider }) => (
          <ListItem
            key={link}
            sx={{
              display: 'block',
              padding: 0,
            }}
          >
            <Link
              href={link}
              sx={{
                color: 'text.primary',
                display: 'block',
                padding: spacing(1.5, 2),
                borderRadius: 3,
                typography: 'label3',
                ':hover': {
                  backgroundColor: 'selected.hover',
                  color: 'primary.dark',
                },
              }}
            >
              {title}
            </Link>
            {divider && <Divider />}
          </ListItem>
        ))}
      </List>
      <Divider sx={{ margin: spacing(0, 1) }} />
    </>
  )
}
