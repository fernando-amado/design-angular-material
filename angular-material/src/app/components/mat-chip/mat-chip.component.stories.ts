import { MatChipsModule } from '@angular/material/chips';
import { MatChipComponent } from './mat-chip.component';
import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { descriptionSizeDosTipos } from 'src/app/stories/module/module.module';

export default {
  title: 'Angular Material/Chip',
  component: MatChipComponent,
  decorators: [
    moduleMetadata({
      imports: [MatChipsModule],
    }),
  ],
  argTypes: {
    size: {
      options: ['small', 'medium'],
      control: { type: 'radio' },
      table: {
        defaultValue: { summary: 'Medium' },
      },
      description: 'Chip ' + descriptionSizeDosTipos.description,
    },
  },
} as Meta;

const Template: Story<MatChipComponent> = (args: MatChipComponent) => ({
  props: args,
});
export const size = Template.bind({});
size.args = {
  size: 'medium',
  label: 'Mat-Chip',
};
