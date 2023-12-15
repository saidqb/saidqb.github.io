---
layout: blog-default
permalink: /source
title:  "Daftar "
author: saidqb
toc: true
source_links:
- title: Theme
  link: free-themes
- title: Snippets
  link: free-snippets

---

<section class="source-main projects no-padding-top">
	<div class="container">
		<!-- Project-->
		{% for source in page.source_links %}

		<div class="project">
			<a href="{{ site.baseurl }}/source/{{source.link}}">
				<div class="row bg-white has-shadow">
					<div class="left-col col-lg-6 d-flex align-items-center justify-content-between">
						<div class="project-title d-flex align-items-center">
							<div class="image has-shadow"><img src="https://ui-avatars.com/api/?name={{source.title}}&bold=true&length=1" alt="..." class="img-fluid"></div>
							<div class="text">
								<h3 class="h4">{{source.title}}</h3>
							</div>
						</div>
					</div>
					<div class=" d-none right-col col-lg-6 d-flex align-items-center justify-content-between">
						<div class="project-progress ">
							<div class="progress">
								<div role="progressbar" style="width: 45%; height: 6px;" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100" class="progress-bar bg-red"></div>
							</div>
						</div>
							<div>
						ddddddd
					</div>
					</div>
				
				</div>
			</a>
		</div>
		{% endfor %}

	</div>
</section>