import { MatRadioModule } from '@angular/material/radio';
import { RadioButtonsComponent } from './radio-buttons.component';
import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { descriptionSizeTresTipos } from 'src/app/stories/module/module.module';

export default {
  title: 'Angular Material/Radio Button',
  component: RadioButtonsComponent,
  decorators: [
    moduleMetadata({
      imports: [MatRadioModule],
    }),
  ],
  argTypes: {
    size: {
      options: ['small', 'medium', 'large'],
      control: { type: 'radio' },
      table: {
        defaultValue: { summary: 'Medium' },
      },
      description:
        'Radio Button ' +
        descriptionSizeTresTipos.description +
        ' `SMALL` O `LARGE`',
    },
  },
} as Meta;

const Template: Story<RadioButtonsComponent> = (
  args: RadioButtonsComponent
) => ({
  props: args,
});
export const size = Template.bind({});
size.args = {
  size: 'medium',
  label: 'Radio-button',
};
