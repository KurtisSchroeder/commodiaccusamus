import * as React from 'react';
import { Item, Select } from '../packages/@wprdc-components/select';

export default {
  title: 'Components/Select',
  component: Select,
};

export const Default = () => (
  <div>
    <Select label="Select an Animal">
      <Item key="red panda">Red Panda</Item>
      <Item key="cat">Cat</Item>
      <Item key="dog">Dog</Item>
      <Item key="aardvark">Aardvark</Item>
      <Item key="kangaroo">Kangaroo</Item>
      <Item key="snake">Snake</Item>
    </Select>
    <div>Bottom tfasdf adsf asd fasd fa sfasdfext</div>
  </div>
);
