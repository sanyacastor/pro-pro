import { defineCloudflareConfig } from '@opennextjs/cloudflare';

export default defineCloudflareConfig();

import('@opennextjs/cloudflare').then(m => m.initOpenNextCloudflareForDev());
