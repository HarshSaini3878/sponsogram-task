'use client'
import {
  Box,
  Flex,
  Text,
  IconButton,
  Stack,
  Collapse,
  useColorModeValue,
  useBreakpointValue,
  useDisclosure,
  InputGroup,
  InputRightElement,
  Input,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon, SearchIcon ,ArrowForwardIcon} from '@chakra-ui/icons';

export default function Navbar() {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Box className="w-screen top-0 absolute ">
      <Flex
        bg={useColorModeValue('white', 'gray.800')}
        color={useColorModeValue('gray.600', 'white')}
        minH={'60px'}
        py={{ base: 8 }}
        px={{ base: 8 }}
        borderBottom={0}
        borderStyle={'solid'}
        borderColor={useColorModeValue('gray.200', 'gray.900')}
        align={'center'}>
        <Flex
          flex={{ base: 1, lg: 'auto' }}
          ml={{ base: -2 }}
          display={{ base: 'flex', lg: 'none' }}>
          <IconButton
            onClick={onToggle}
            icon={isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />}
            variant={'ghost'}
            aria-label={'Toggle Navigation'}
          />
        </Flex>
        <Flex flex={{ base: 1 }} justify={{ base: 'center', lg: 'start' }}>
          <Text
            textAlign={useBreakpointValue({ base: 'center', lg: 'left' })}
            fontWeight="700"
            fontSize="20px"
            marginLeft="10px"
            color={useColorModeValue('gray.800', 'white')}>
            Sponsogram
          </Text>

          <Flex display={{ base: 'none', lg: 'flex' }} justify="space-around" w="100%">
            <DesktopNav />
          </Flex>
        </Flex>

        <Stack
          flex={{ base: 1, lg: 0 }}
          justify={'end'}
          direction={'row'}
          spacing={6}
          zIndex={2}>
          <Stack spacing={4} paddingRight={40} borderRadius="20px">
            <InputGroup borderRadius="20px" bgColor="#ffffff">
              <Input type='tel' placeholder='Search' borderRadius="20px" width="300px" height="45px" />
              <InputRightElement pointerEvents='none'>
                <SearchIcon color='green.400' />
              </InputRightElement>
            </InputGroup>
          </Stack>
        </Stack>
      </Flex>

      <Box display={{ lg: 'none' }}>
        <Collapse in={isOpen} animateOpacity>
          <MobileNav />
        </Collapse>
      </Box>
    </Box>
  );
}

const DesktopNav = () => {
  const linkColor = useColorModeValue('gray.600', 'gray.200');
  const linkHoverColor = useColorModeValue('gray.800', 'white');

  return (
    <Stack direction={'row'} spacing={8} justify="center" w="100%">
      {NAV_ITEMS.map((navItem) => (
        <Box key={navItem.label}>
          <Box
            as="a"
            p={2}
            href={navItem.href ?? '#'}
            fontSize={'xl'}
            fontWeight={500}
            color={linkColor}
            _hover={{
              textDecoration: 'none',
              color: linkHoverColor,
            }}>
            {navItem.label}
          </Box>
        </Box>
      ))}
    </Stack>
  );
}

const MobileNav = () => {
  return (
    <Stack bg={useColorModeValue('white', 'gray.800')} p={4} display={{ lg: 'none' }}>
      {NAV_ITEMS.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
    </Stack>
  );
}

const MobileNavItem = ({ label, href }: NavItem) => {
  return (
    <Box py={2} as="a" href={href ?? '#'} _hover={{ textDecoration: 'none' }}>
      <Text fontWeight={600} color={useColorModeValue('gray.600', 'gray.200')}>
        {label}
      </Text>
    </Box>
  );
}

interface NavItem {
  label: string
  href?: string
}

const NAV_ITEMS: Array<NavItem> = [
  {
    label: 'Home',
    href: '#',
  },
  {
    label: 'Services',
    href: '#',
  },
  {
    label: 'Products',
    href: '#',
  },
  {
    label: 'Contact',
    href: '#',
  },
  {
    label: 'About',
    href: '#',
  },
];
