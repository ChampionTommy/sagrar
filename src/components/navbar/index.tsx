import { Box, Heading } from '@chakra-ui/react';
import { Menu, Portal } from '@chakra-ui/react';
import { useCallback, useEffect, useState } from 'react';
import { Button } from '../ui/button';
import { Link } from '@/components/ui/link';

interface MenuItemBase {
  id: string;
  title: string;
}

interface MenuItemLink extends MenuItemBase {
  url: string;
}

interface MenuItemWithChildren extends MenuItemBase {
  items: MenuItemLink[];
}

type MenuItem = MenuItemLink | MenuItemWithChildren;

interface MenuSection {
  title: string;
  items?: MenuItem[];
}

interface NavbarProps {
  menu: {
    items: MenuSection[];
  };
  headerRef: React.RefObject<HTMLElement>;
  handleClickRef?: (e: React.MouseEvent) => void;
  isSticky: boolean;
}

interface NavbarItemProps {
  item: MenuItem;
}

const NavbarItem = ({ item }: NavbarItemProps) => {
  if ('items' in item) {
    return (
      <Box width="25%" pr="30px" mb="40px">
        <Heading fontSize="18px" color="black">
          {item.title}
        </Heading>
        {item.items.map((subItem) => (
          <Link
            key={subItem.id}
            href={subItem.url}
            visual="link"
            display="flex"
            flexDirection="col"
          >
            {subItem.title}
          </Link>
        ))}
      </Box>
    );
  }
  return (
    <Link href={item.url} visual="link">
      {item.title}
    </Link>
  );
};

export const Navbar = ({ menu, headerRef, handleClickRef }: NavbarProps) => {
  const [anchorRect, setAnchorRect] = useState<DOMRect | null>(null);
  console.log(anchorRect);
  useEffect(() => {
    if (!headerRef?.current) return;

    const updatePosition = () => {
      const rect = headerRef.current!.getBoundingClientRect();
      setAnchorRect((prev) =>
        prev?.width === rect.width && prev?.height === rect.height ? prev : rect
      );
    };

    const resizeObserver = new ResizeObserver(updatePosition);
    resizeObserver.observe(headerRef.current);

    return () => resizeObserver.disconnect();
  }, [headerRef]);

  const handleButtonClick = useCallback(
    (e: React.MouseEvent) => {
      handleClickRef?.(e);
      if (headerRef?.current) {
        setAnchorRect(headerRef.current.getBoundingClientRect());
      }
    },
    [handleClickRef, headerRef]
  );

  const getAnchorRect = useCallback((): DOMRect | null => {
    if (!headerRef.current) return null;

    const rect = headerRef.current.getBoundingClientRect();
    return new DOMRect(rect.left, rect.top, rect.width, rect.height);
  }, [headerRef]);

  return (
    <>
      {menu.items.map((section) => (
        <Menu.Root
          key={section.title}
          positioning={{
            getAnchorRect,
            placement: 'bottom-start',
            strategy: 'fixed',
          }}
        >
          <Menu.Trigger asChild>
            <Button
              aria-haspopup="menu"
              visual="link"
              onClick={handleButtonClick}
              data-menu-trigger
            >
              <span>{section.title}</span>
            </Button>
          </Menu.Trigger>
          <Portal>
            <Menu.Positioner width="100%">
              <Menu.Content
                position="absolute"
                top="-9px"
                paddingTop="30px"
                paddingBottom="30px"
                borderBottom="1px solid #c7d5eb"
                borderTop="1px solid #c7d5eb"
                backgroundColor="#F6F6F6"
                shadow="none"
                borderRadius="0px"
                width="100%"
                transition="none"
              >
                <Box maxW="1440px" mx="auto" display="flex" flexWrap="wrap">
                  {section.items?.map((item) => (
                    <NavbarItem key={item.id} item={item} />
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
