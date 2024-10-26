import {Button} from "@trionesdev/antd-taro-react";

const ButtonBase = () => {
  return <div style={{padding: '8px'}}>
    <div>按钮类型</div>
    <div style={{gap: '8px', rowGap: '8px', display: 'flex', flexWrap: 'wrap'}}>
      <Button type={`primary`}>Primary</Button>
      <Button type={`default`}>Default</Button>
      <Button type={`dashed`}>Dashed</Button>
      <Button type={`text`}>Text</Button>
      <Button type={`link`}>Link</Button>
    </div>
    <div>颜色与变体</div>
    <div style={{gap: '8px', rowGap: '8px', display: 'flex', flexWrap: 'wrap'}}>
      <div style={{gap: '8px', rowGap: '8px', display: 'flex', flexWrap: 'wrap'}}>
        <Button color={`default`} variant={`solid`}>Solid</Button>
        <Button color={`default`} variant={`outlined`}>Outlined</Button>
        <Button color={`default`} variant={`dashed`}>Dashed</Button>
        <Button color={`default`} variant={`filled`}>Filled</Button>
        <Button color={`default`} variant={`text`}>Text</Button>
        <Button color={`default`} variant={`link`}>Link</Button>
      </div>
      <div style={{gap: '8px', rowGap: '8px', display: 'flex', flexWrap: 'wrap'}}>
        <Button color={`primary`} variant={`solid`}>Solid</Button>
        <Button color={`primary`} variant={`outlined`}>Outlined</Button>
        <Button color={`primary`} variant={`dashed`}>Dashed</Button>
        <Button color={`primary`} variant={`filled`}>Filled</Button>
        <Button color={`primary`} variant={`text`}>Text</Button>
        <Button color={`primary`} variant={`link`}>Link</Button>
      </div>
      <div style={{gap: '8px', rowGap: '8px', display: 'flex', flexWrap: 'wrap'}}>
        <Button color={`danger`} variant={`solid`}>Solid</Button>
        <Button color={`danger`} variant={`outlined`}>Outlined</Button>
        <Button color={`danger`} variant={`dashed`}>Dashed</Button>
        <Button color={`danger`} variant={`filled`}>Filled</Button>
        <Button color={`danger`} variant={`text`}>Text</Button>
        <Button color={`danger`} variant={`link`}>Link</Button>
      </div>
    </div>

    <div>块级按钮</div>
    <div style={{gap: '8px', rowGap: '8px', display: 'flex', flexWrap: 'wrap'}}>
      <Button block={true} color='primary'>按钮</Button>
    </div>
    <div>禁用</div>
    <div style={{gap: '8px', rowGap: '8px', display: 'flex', flexWrap: 'wrap'}}>
      <Button type={`primary`} disabled>主要按钮</Button>
      <Button type={`default`} disabled>次要按钮</Button>
      <Button type={`text`} disabled>文本按钮</Button>
    </div>
    <div>危险</div>
    <div style={{gap: '8px', rowGap: '8px', display: 'flex', flexWrap: 'wrap'}}>
      <Button type={`primary`} danger>主要按钮</Button>
      <Button type={`default`} danger>次要按钮</Button>
      <Button type={`text`} danger>文本按钮</Button>
    </div>
  </div>
}
export default ButtonBase
