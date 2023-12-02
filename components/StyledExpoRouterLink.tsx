import { Link, LinkProps } from 'expo-router';
import { styled } from '@gluestack-ui/themed';

type MyLinkProps = LinkProps<string> & { ml?: string };

export default styled(
  Link,
  {},
  {
    componentName: 'StyledExpoRouterLink',
  }
) as unknown as React.ComponentType<MyLinkProps>;
