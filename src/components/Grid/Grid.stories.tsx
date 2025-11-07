import type { Meta, StoryObj } from '@storybook/react';
import { Grid, GridItem } from './Grid';
import { Card, CardContent } from '../Card/Card';

const meta: Meta<typeof Grid> = {
  title: 'Components/Grid',
  component: Grid,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Grid>;

export const Default: Story = {
  render: () => (
    <Grid cols={3} gap="md">
      <GridItem>
        <Card>
          <CardContent className="p-4">Item 1</CardContent>
        </Card>
      </GridItem>
      <GridItem>
        <Card>
          <CardContent className="p-4">Item 2</CardContent>
        </Card>
      </GridItem>
      <GridItem>
        <Card>
          <CardContent className="p-4">Item 3</CardContent>
        </Card>
      </GridItem>
    </Grid>
  ),
};

export const Responsive: Story = {
  render: () => (
    <Grid cols={12} gap="md" responsive>
      {Array.from({ length: 6 }).map((_, i) => (
        <GridItem key={i} colSpan={4}>
          <Card>
            <CardContent className="p-4">Item {i + 1}</CardContent>
          </Card>
        </GridItem>
      ))}
    </Grid>
  ),
};

export const DifferentGaps: Story = {
  render: () => (
    <div className="space-y-8">
      <div>
        <h3 className="mb-2">Small Gap</h3>
        <Grid cols={3} gap="sm">
          {Array.from({ length: 3 }).map((_, i) => (
            <GridItem key={i}>
              <Card>
                <CardContent className="p-4">Item {i + 1}</CardContent>
              </Card>
            </GridItem>
          ))}
        </Grid>
      </div>
      <div>
        <h3 className="mb-2">Large Gap</h3>
        <Grid cols={3} gap="lg">
          {Array.from({ length: 3 }).map((_, i) => (
            <GridItem key={i}>
              <Card>
                <CardContent className="p-4">Item {i + 1}</CardContent>
              </Card>
            </GridItem>
          ))}
        </Grid>
      </div>
    </div>
  ),
};

