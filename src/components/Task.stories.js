import React from "react";

import Task from "./Task";

export default {
  component: Task,
  title: "Task",
};

const Template = (args) => <Task {...args} />;

export const Default = Template.bind({});
Default.args = {
  task: {
    id: "1",
    title: "Test Task",
    state: "TASK_INBOX",
  },
};

export const Pinned = Template.bind({});
Pinned.args = {
  task: {
    ...Default.args.task,
    state: "TASK_PINNED",
  },
};

export const Archived = Template.bind({});
Archived.args = {
  task: {
    ...Default.args.task,
    state: "TASK_ARCHIVED",
  },
};

const longTitleString = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut volutpat tortor felis, et tempor est fermentum ut. Cras eu lacus quis velit varius maximus non quis nisl. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus cursus tempus metus quis tincidunt. Morbi laoreet aliquet arcu ut auctor. Curabitur at arcu ut turpis vestibulum posuere vitae ac sem. Aenean gravida at diam ac dapibus. Maecenas dapibus massa sit amet dui aliquam dignissim. Nam bibendum placerat sollicitudin. Proin elit eros, fringilla aliquet nunc quis, commodo feugiat mauris. Nam non leo rhoncus, imperdiet ligula facilisis, tempus mauris. Nullam placerat suscipit dui, non euismod ipsum cursus vitae. Fusce sagittis diam vel dui pellentesque maximus. Nam dictum purus id felis dapibus dignissim. Proin mattis, justo sed ultricies accumsan, sapien tellus auctor velit, vitae sagittis dolor lacus sed ante. Sed pretium sapien ac semper semper.

Nunc diam augue, tincidunt dapibus condimentum quis, volutpat vitae quam. Maecenas justo ex, facilisis at libero convallis, lobortis hendrerit lectus. Phasellus euismod sem nisi, non maximus erat laoreet gravida. Phasellus id lacus nisi. Ut et erat laoreet, ultricies massa nec, iaculis augue. Aenean congue nunc vel lacinia tincidunt. Pellentesque posuere, nunc id aliquet malesuada, urna erat dictum libero, non dignissim elit velit sit amet massa. Nulla facilisi. Sed condimentum, risus sit amet ullamcorper tincidunt, eros ante facilisis tortor, vitae eleifend sem lacus at mauris. Ut ac porttitor libero, vel pulvinar sapien. Curabitur eget volutpat neque, non pulvinar odio. Nam mattis augue at elit mollis varius.

Nullam sit amet est ullamcorper, aliquam turpis a, consectetur erat. Cras vestibulum ultrices hendrerit. Quisque sit amet turpis lorem. Phasellus ex arcu, rhoncus placerat rhoncus id, mattis vitae ex. Suspendisse eleifend nisl ac mauris fringilla blandit. Mauris laoreet nisi sed enim lacinia, id mattis ligula pretium. Nulla vitae venenatis nibh, non laoreet magna. Aliquam ac posuere velit.

Maecenas eu leo viverra odio hendrerit sagittis id non velit. Sed lobortis, lacus quis convallis condimentum, tortor dolor imperdiet augue, non varius ex risus a felis. Praesent rhoncus, dolor eu venenatis interdum, lectus turpis ultricies tellus, eu pharetra tortor sapien non ipsum. Pellentesque odio libero, venenatis ac velit in, pulvinar aliquet ex. Fusce consequat dolor eros, id malesuada tortor commodo vel. Quisque viverra augue vitae purus tempor dictum. Donec cursus, magna eget pellentesque auctor, ipsum dolor pulvinar tortor, a iaculis risus nulla sit amet elit. Integer non tellus dignissim, elementum nunc vitae, scelerisque ligula.

Aenean consectetur dolor sed arcu faucibus venenatis. Nullam consequat suscipit ex quis blandit. Fusce molestie quam sed ullamcorper congue. Fusce ac lacus mi. Praesent a varius tortor. Pellentesque sit amet nisl vel justo fermentum pretium quis quis lectus. Pellentesque ornare feugiat nisl quis consequat. Ut ac justo id dui blandit sagittis eu sed magna. Suspendisse quis elementum ante. Sed et est egestas, pretium eros et, vulputate ipsum. Nunc quis nisl pharetra, pellentesque erat et, posuere ante. Nam cursus massa ac mauris sodales, et eleifend est malesuada.`;

export const LongTitle = Template.bind({});
LongTitle.args = {
  task: {
    ...Default.args.task,
    title: longTitleString
  },
};
