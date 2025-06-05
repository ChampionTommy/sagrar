import { Box, Link } from '@chakra-ui/react';
import { Menu, Portal } from '@chakra-ui/react';
import { NavbarProps } from '@/types';
import { useEffect, useState } from 'react';
import { Button } from '../ui/button';

export const Navbar = ({ menu, headerRef, handleClickRef }: NavbarProps) => {
  const [anchorRect, setAnchorRect] = useState<DOMRect | null>(null);

  useEffect(() => {
    if (!headerRef?.current) return;

    const updatePosition = () => {
      setAnchorRect(headerRef.current!.getBoundingClientRect());
    };

    updatePosition();

    window.addEventListener('resize', updatePosition);
    return () => window.removeEventListener('resize', updatePosition);
  }, [headerRef]);

  const getAnchorRect = () => anchorRect;

  return (
    <>
      {menu.items.map((section) => (
        <Menu.Root
          key={section.title}
          positioning={{
            getAnchorRect,
            placement: 'bottom-start',
          }}
        >
          <Menu.Trigger asChild>
            <Button
              visual="link"
              onClick={(e) => {
                handleClickRef?.(e);
                if (headerRef?.current) {
                  setAnchorRect(headerRef.current.getBoundingClientRect());
                }
              }}
              data-menu-trigger
            >
              <span>{section.title}</span>
            </Button>
          </Menu.Trigger>
          <Portal>
            <Menu.Positioner width="100%">
              <Menu.Content
                position="absolute"
                display="block"
                isolation="isolate"
                width="100%"
                top="-9px"
                left="-8px"
                paddingTop="30px"
                paddingBottom="30px"
                borderBottom="1px solid #c7d5eb"
                borderTop="1px solid #c7d5eb"
                backgroundColor="#F6F6F6"
                shadow="none"
                borderRadius="0px"
              >
                <Box
                  width="100%"
                  display="flex"
                  justifyContent="flex-start"
                  alignItems="flex-start"
                  flexWrap="wrap"
                  fontWeight="500"
                  fontSize="14px"
                  lineHeight="16px"
                >
                  {section.items?.map((subsection) => (
                    <Box
                      as="div"
                      display="flex"
                      flexDirection="column"
                      width="25%"
                      paddingRight="30px"
                      marginBottom="40px"
                      key={subsection.id}
                    >
                      {'url' in subsection ? (
                        <Link href={subsection.url} color="blue">
                          {subsection.title}
                        </Link>
                      ) : (
                        <>
                          <Link paddingInline="0px" fontWeight="bold">
                            {subsection.title}
                          </Link>
                          {subsection.items.map((item) => (
                            <Link key={item.id} href={item.url}>
                              {item.title}
                            </Link>
                          ))}
                        </>
                      )}
                    </Box>
                  ))}
                </Box>
              </Menu.Content>
            </Menu.Positioner>
          </Portal>
        </Menu.Root>
      ))}
    </>
  );
};
