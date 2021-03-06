import React, { PropTypes } from 'react';
import Button from 'antd/lib/button';
import QueueAnim from 'rc-queue-anim';
import TweenOne from 'rc-tween-one';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';
import './index.less';

class Content extends React.Component {

  static contextTypes = {
    className: React.PropTypes.string,
    name: React.PropTypes.string,
    style: React.PropTypes.object,
    dataSource: React.PropTypes.object,
  };

  static defaultProps = {
    className: 'content0',
    style: {
      height: '50%',
    },
    dataSource: {
      block1: {
        img: 'https://zos.alipayobjects.com/rmsportal/nLzbeGQLPyBJoli.png',
        title: '企业资源管理',
        content: '云资源集中编排、弹性伸缩、持续发布和部署，高可用及容灾。' +
        '云资源集中编排、弹性伸缩、持续发布和部署，高可用及容灾。',
      },
    },
  };


  render() {
    const props = { ...this.props };
    const { img, title, content } = props.dataSource.block1;
    delete props.dataSource;
    delete props.name;
    return (
      <div {...props} className={`${props.className}-wrapper`}>
        <OverPack
          scrollName={this.props.name}
          className={props.className}
          hideProps={{ img: { reverse: true } }}
        >
          <TweenOne
            key="img"
            animation={{ x: '-=30', opacity: 0, type: 'from' }}
            className={`${props.className}-img`}
          >
            <img height="100%" src={img} />
          </TweenOne>
          <QueueAnim
            className={`${props.className}-text`}
            key="text"
            leaveReverse
            ease={['easeOutCubic', 'easeInCubic']}
          >
            <h1 key="h1">{title}</h1>
            <p key="p">{content}</p>
          </QueueAnim>
        </OverPack>
      </div>
    );
  }
}


export default Content;
