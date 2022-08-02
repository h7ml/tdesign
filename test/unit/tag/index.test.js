import { mount } from '@vue/test-utils';
import Tag from '@/src/tag/index.ts';
import CheckTag from '@/src/tag/check-tag.tsx';

describe('Tag or CheckTag', () => {
  describe(':Tag:props', () => {
    it(':theme:', () => {
      const wrapper = mount({
        render() {
          return <Tag></Tag>;
        },
      });
      expect(wrapper).toMatchSnapshot();
    });
    it(':theme:default', () => {
      const wrapper = mount({
        render() {
          return <Tag theme={'default'}></Tag>;
        },
      });
      expect(wrapper).toMatchSnapshot();
    });
    it(':theme:primary', () => {
      const wrapper = mount({
        render() {
          return <Tag theme={'primary'}></Tag>;
        },
      });
      expect(wrapper).toMatchSnapshot();
    });
    it(':theme:warning', () => {
      const wrapper = mount({
        render() {
          return <Tag theme={'warning'}></Tag>;
        },
      });
      expect(wrapper).toMatchSnapshot();
    });
    it(':theme:danger', () => {
      const wrapper = mount({
        render() {
          return <Tag theme={'danger'}></Tag>;
        },
      });
      expect(wrapper).toMatchSnapshot();
    });
    it(':theme:success', () => {
      const wrapper = mount({
        render() {
          return <Tag theme={'success'}></Tag>;
        },
      });
      expect(wrapper).toMatchSnapshot();
    });

    it(':size:small', () => {
      const wrapper = mount({
        render() {
          <Tag size='small'></Tag>;
        },
      });
      expect(wrapper).toMatchSnapshot();
    });
    it(':size:medium', () => {
      const wrapper = mount({
        render() {
          <Tag size="medium"></Tag>;
        },
      });
      expect(wrapper).toMatchSnapshot();
    });
    it(':size:large', () => {
      const wrapper = mount({
        render() {
          return <Tag size={'large'}></Tag>;
        },
      });
      expect(wrapper).toMatchSnapshot();
    });

    it(':closable', () => {
      const fn = jest.fn();
      const wrapper = mount({
        render() {
          return <Tag closable onClose={fn}></Tag>;
        },
      });
      expect(wrapper).toMatchSnapshot();
      wrapper.find('.t-icon-close').trigger('click');
      expect(fn).toHaveBeenCalled();
    });

    it(':checked', () => {
      const wrapper = mount({
        render() {
          return <Tag checked></Tag>;
        },
      });
      expect(wrapper).toMatchSnapshot();
    });

    it(':disabled', () => {
      const fn = jest.fn();
      const wrapper = mount({
        render() {
          return <Tag disabled onClick={fn}></Tag>;
        },
      });
      expect(fn).not.toHaveBeenCalled();
      expect(wrapper).toMatchSnapshot();
    });

    it(':variant:dark;theme:default', () => {
      const wrapper = mount({
        render() {
          return <Tag variant="dark" theme={'default'}></Tag>;
        },
      });
      expect(wrapper).toMatchSnapshot();
    });
    it(':variant:dark;theme:primary', () => {
      const wrapper = mount({
        render() {
          return <Tag variant="dark" theme={'primary'}></Tag>;
        },
      });
      expect(wrapper).toMatchSnapshot();
    });
    it(':variant:dark;theme:warning', () => {
      const wrapper = mount({
        render() {
          return <Tag variant="dark" theme={'warning'}></Tag>;
        },
      });
      expect(wrapper).toMatchSnapshot();
    });
    it(':variant:dark;theme:danger', () => {
      const wrapper = mount({
        render() {
          return <Tag variant="dark" theme={'danger'}></Tag>;
        },
      });
      expect(wrapper).toMatchSnapshot();
    });
    it(':variant:dark;theme:success', () => {
      const wrapper = mount({
        render() {
          return <Tag variant="dark" theme={'success'}></Tag>;
        },
      });
      expect(wrapper).toMatchSnapshot();
    });

    it(':variant:plain;theme:default', () => {
      const wrapper = mount({
        render() {
          return <Tag variant="plain" theme={'default'}></Tag>;
        },
      });
      expect(wrapper).toMatchSnapshot();
    });
    it(':variant:plain;theme:primary', () => {
      const wrapper = mount({
        render() {
          return <Tag variant="plain" theme={'primary'}></Tag>;
        },
      });
      expect(wrapper).toMatchSnapshot();
    });
    it(':variant:plain;theme:warning', () => {
      const wrapper = mount({
        render() {
          return <Tag variant="plain" theme={'warning'}></Tag>;
        },
      });
      expect(wrapper).toMatchSnapshot();
    });
    it(':variant:plain;theme:danger', () => {
      const wrapper = mount({
        render() {
          return <Tag variant="plain" theme={'danger'}></Tag>;
        },
      });
      expect(wrapper).toMatchSnapshot();
    });
    it(':variant:plain;theme:success', () => {
      const wrapper = mount({
        render() {
          return <Tag variant="plain" theme={'success'}></Tag>;
        },
      });
      expect(wrapper).toMatchSnapshot();
    });
    it(':variant:light;theme:default', () => {
      const wrapper = mount({
        render() {
          return <Tag variant="light" theme={'default'}></Tag>;
        },
      });
      expect(wrapper).toMatchSnapshot();
    });
    it(':variant:light;theme:primary', () => {
      const wrapper = mount({
        render() {
          return <Tag variant="light" theme={'primary'}></Tag>;
        },
      });
      expect(wrapper).toMatchSnapshot();
    });
    it(':variant:light;theme:warning', () => {
      const wrapper = mount({
        render() {
          return <Tag variant="light" theme={'warning'}></Tag>;
        },
      });
      expect(wrapper).toMatchSnapshot();
    });
    it(':variant:light;theme:danger', () => {
      const wrapper = mount({
        render() {
          return <Tag variant="light" theme={'danger'}></Tag>;
        },
      });
      expect(wrapper).toMatchSnapshot();
    });
    it(':variant:light;theme:success', () => {
      const wrapper = mount({
        render() {
          return <Tag variant="light" theme={'success'}></Tag>;
        },
      });
      expect(wrapper).toMatchSnapshot();
    });

    it(':shape:round', () => {
      const wrapper = mount({
        render() {
          return <Tag shape={'round'}></Tag>;
        },
      });
      expect(wrapper).toMatchSnapshot();
    });
    it(':shape:square', () => {
      const wrapper = mount({
        render() {
          return <Tag shape={'square'}></Tag>;
        },
      });
      expect(wrapper).toMatchSnapshot();
    });
    it(':shape:mark', () => {
      const wrapper = mount({
        render() {
          return <Tag shape={'mark'}></Tag>;
        },
      });
      expect(wrapper).toMatchSnapshot();
    });

    it(':maxWidth', () => {
      const wrapper = mount({
        render() {
          return <Tag max-width={100}></Tag>;
        },
      });
      expect(wrapper).toMatchSnapshot();
    });
  });

  describe('CheckTag:props', () => {
    it(':checked', () => {
      const wrapper = mount({
        render() {
          return <CheckTag checked></CheckTag>;
        },
      });
      expect(wrapper).toMatchSnapshot();
    });
    it(':disabled', () => {
      const fn = jest.fn();
      const wrapper = mount({
        render() {
          return <CheckTag disabled onClick={fn}></CheckTag>;
        },
      });
      expect(fn).not.toHaveBeenCalled();
      expect(wrapper).toMatchSnapshot();
    });
  });

  describe('Tag:slot', () => {
    it('<icon>', () => {
      const wrapper = mount(Tag, {
        scopedSlots: {
          icon: '<div></div>',
        },
      });
      expect(wrapper).toMatchSnapshot();
    });
  });

  describe('@event: Tag', () => {
    it('Event passthrough: click', () => {
      const fn = jest.fn();
      const wrapper = mount({
        render() {
          return <Tag onClick={fn}>text</Tag>;
        },
      });
      wrapper.findComponent(Tag).trigger('click');
      expect(fn).toHaveBeenCalled();
    });
    it('Event passthrough: close', () => {
      const fn = jest.fn();
      const wrapper = mount({
        render() {
          return <Tag closable onClose={fn}></Tag>;
        },
      });
      expect(wrapper).toMatchSnapshot();
      wrapper.find('.t-icon-close').trigger('click');
      expect(fn).toHaveBeenCalled();
    });
  });

  describe('@event: CheckTag', () => {
    it('Event passthrough: click', () => {
      const fn = jest.fn();
      const wrapper = mount({
        render() {
          return <CheckTag checked onClick={fn}>text</CheckTag>;
        },
      });
      wrapper.findComponent(CheckTag).trigger('click');
      expect(fn).toBeCalled();
    });
    it('Event passthrough: trigger onClick props', () => {
      const fn = jest.fn();
      const wrapper = mount({
        render(h) {
          return h(CheckTag, {
            props: {
              onClick: fn,
            },
          });
        },
      }).findComponent(CheckTag);
      wrapper.findComponent(CheckTag).trigger('click');
      expect(fn).toBeCalled();
    });
  });
});
