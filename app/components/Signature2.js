import React from 'react'

export default class Signature2 extends React.Component {
	constructor(props) {
		super(props)
	}

	render() {
		return(
			<table cellPadding="0" cellSpacing="0"
				style={{verticalSpacing: '-webkit-baseline-middle', fontSize: 'medium', fontFamily: 'Arial', minWidth: '450px'}}>
				<tbody>
					<tr>
						<td style={{textAlign: 'center'}}>
							<img width="130"
								src="https://cdn2.hubspot.net/hubfs/53/tools/email-signature-generator/placeholders/placeholder-image@2x.png"
								role="presentation" style={{maxWidth: '130px', display: 'inline-block'}} />
						</td>
					</tr>
					<tr>
						<td height="10"></td>
					</tr>
					<tr style={{textAlign: 'center'}}>
						<td>
							<h3 color="#000000" style={{margin: '0px', fontSize: '18px', color: 'rgb(0, 0, 0)'}}>
								<span>{ this.props.firstName }</span><span>&nbsp;</span><span>{ this.props.lastName }</span>
							</h3>
							{ this.props.jobTitle &&
								<p color="#000000" fontSize="medium"
									style={{margin: '0px', color: 'rgb(0, 0, 0)', fontSize: '14px', lineHeight: '22px'}}>
									<span>{ this.props.jobTitle }</span>
								</p>
							}
							{ (this.props.department || this.props.companyName) &&
								<p color="#000000" fontSize="medium"
									style={{margin: '0px', fontWeight: '500', color: 'rgb(0, 0, 0)', fontSize: '14px', lineHeight: '22px'}}>
									<span>{ this.props.department }</span>{ (this.props.department && this.props.companyName) && <span>&nbsp;|&nbsp;</span> }<span>{ this.props.companyName }</span>
								</p>
							}
						</td>
					</tr>
					<tr>
						<td>
							<table cellPadding="0" cellSpacing="0"
								style={{verticalSpacing: '-webkit-baseline-middle', fontSize: 'medium', fontFamily: 'Arial', width: '100%'}}>
								<tbody>
									<tr>
										<td height="30"></td>
									</tr>
									<tr>
										<td height="1" color="#F2547D" direction="horizontal"
											style={{width: '100%', borderBottom: '1px solid rgb(242, 84, 125)', borderLeft: 'none', display: 'block'}}>
										</td>
									</tr>
									<tr>
										<td height="30"></td>
									</tr>
								</tbody>
							</table>
							<table cellPadding="0" cellSpacing="0"
								style={{verticalSpacing: '-webkit-baseline-middle', fontSize: 'medium', fontFamily: 'Arial', width: '100%'}}>
								<tbody>
									<tr style={{verticalSpacing: 'middle'}}>
										<td>
											<table cellPadding="0" cellSpacing="0"
												style={{verticalSpacing: '-webkit-baseline-middle', fontSize: 'medium', fontFamily: 'Arial'}}>
												<tbody>
													{ (this.props.officePhone || this.props.mobilePhone) &&
													<tr height="25" style={{verticalSpacing: 'middle'}}>
														<td width="30" style={{verticalSpacing: 'middle'}}>
															<table cellPadding="0" cellSpacing="0"
																style={{verticalSpacing: '-webkit-baseline-middle', fontSize: 'medium', fontFamily: 'Arial'}}>
																<tbody>
																	<tr>
																		<td style={{verticalSpacing: 'bottom'}}>
																			<span width="11"
																				color="#F2547D" style={{display: 'block', backgroundColor: 'rgb(242, 84, 125)'}}>
																				<img
																					width="12"
																					src="https://cdn2.hubspot.net/hubfs/53/tools/email-signature-generator/icons/phone-icon-2x.png"
																					color="#F2547D"
																					style={{display: 'block', backgroundColor: 'rgb(242, 84, 125)'}} />
																			</span>
																		</td>
																	</tr>
																</tbody>
															</table>
														</td>
														<td style={{padding: '0px', color: 'rgb(0, 0, 0)'}}>
															<a href={ `tel:${ this.props.officePhone }` } color="#000000"
																style={{textDecoration: 'none', color: 'rgb(0, 0, 0)', fontSize: '12px'}}>
																<span>{ this.props.officePhone }</span></a> | <a href={ `tel:${ this.props.mobilePhone }` }
																color="#000000"
																style={{textDecoration: 'none', color: 'rgb(0, 0, 0)', fontSize: '12px'}}>
																<span>{ this.props.mobilePhone }</span>
															</a>
														</td>
													</tr>
													}
													{ this.props.emailAddress &&
														<tr height="25" style={{verticalSpacing: 'middle'}}>
															<td width="30" style={{verticalSpacing: 'middle'}}>
																<table cellPadding="0" cellSpacing="0"
																	style={{verticalSpacing: '-webkit-baseline-middle', fontSize: 'medium', fontFamily: 'Arial'}}>
																	<tbody>
																		<tr>
																			<td style={{verticalSpacing: 'bottom'}}>
																				<span width="11" color="#F2547D"
																					style={{display: 'block', backgroundColor: 'rgb(242, 84, 125)'}}>
																					<img width="12"
																						src="https://cdn2.hubspot.net/hubfs/53/tools/email-signature-generator/icons/email-icon-2x.png"
																						color="#F2547D"
																						style={{display: 'block', backgroundColor: 'rgb(242, 84, 125)'}} />
																				</span>
																			</td>
																		</tr>
																	</tbody>
																</table>
															</td>
															<td style={{padding: '0px'}}>
																<a href={ `mailto:${ this.props.emailAddress }` } color="#000000"
																	style={{textDecoration: 'none', color: 'rgb(0, 0, 0)', fontSize: '12px'}}>
																	<span>{ this.props.emailAddress }</span>
																</a>
															</td>
														</tr>
													}
													{ this.props.websiteUrl &&
														<tr height="25" style={{verticalSpacing: 'middle'}}>
															<td width="30" style={{verticalSpacing: 'middle'}}>
																<table cellPadding="0" cellSpacing="0"
																	style={{verticalSpacing: '-webkit-baseline-middle', fontSize: 'medium', fontFamily: 'Arial'}}>
																	<tbody>
																		<tr>
																			<td style={{verticalSpacing: 'bottom'}}>
																				<span width="11" color="#F2547D"
																					style={{display: 'block', backgroundColor: 'rgb(242, 84, 125)'}}>
																					<img width="12"
																						src="https://cdn2.hubspot.net/hubfs/53/tools/email-signature-generator/icons/link-icon-2x.png"
																						color="#F2547D"
																						style={{display: 'block', backgroundColor: 'rgb(242, 84, 125)'}} />
																				</span>
																			</td>
																		</tr>
																	</tbody>
																</table>
															</td>
															<td style={{padding: '0px'}}>
																<a href={`https://${this.props.websiteUrl}`} color="#000000"
																	style={{textDecoration: 'none', color: 'rgb(0, 0, 0)', fontSize: '12px'}}>
																	<span>{ this.props.websiteUrl }</span>
																</a>
															</td>
														</tr>
													}
													{ this.props.address &&
														<tr height="25" style={{verticalSpacing: 'middle'}}>
															<td width="30" style={{verticalSpacing: 'middle'}}>
																<table cellPadding="0" cellSpacing="0"
																	style={{verticalSpacing: '-webkit-baseline-middle', fontSize: 'medium', fontFamily: 'Arial'}}>
																	<tbody>
																		<tr>
																			<td style={{verticalSpacing: 'bottom'}}>
																				<span width="11" color="#F2547D"
																					style={{display: 'block', backgroundColor: 'rgb(242, 84, 125)'}}>
																					<img width="12"
																						src="https://cdn2.hubspot.net/hubfs/53/tools/email-signature-generator/icons/address-icon-2x.png"
																						color="#F2547D"
																						style={{display: 'block', backgroundColor: 'rgb(242, 84, 125)'}} />
																				</span>
																			</td>
																		</tr>
																	</tbody>
																</table>
															</td>
															<td style={{padding: '0px'}}>
																<span color="#000000"
																	style={{fontSize: '12px', color: 'rgb(0, 0, 0)'}}>
																	<span>{ this.props.address }</span>
																</span>
															</td>
														</tr>
													}
												</tbody>
											</table>
										</td>
										<td width="15"></td>
										<td style={{textAlign: 'right'}}>
											<table cellPadding="0" cellSpacing="0"
												style={{verticalSpacing: '-webkit-baseline-middle', fontSize: 'medium', fontFamily: 'Arial', width: '100%'}}>
												<tbody>
													<tr>
														<td>
															<img width="130"
																src="https://cdn2.hubspot.net/hubfs/53/tools/email-signature-generator/placeholders/logo-placeholder@2x.png"
																role="presentation"
																style={{maxWidth: '130px', display: 'inline-block'}} />
														</td>
													</tr>
													<tr>
														<td height="10"></td>
													</tr>
													{ (this.props.socialFacebook || this.props.socialInstagram || this.props.socialLinkedin || this.props.socialTwitter) &&
														<tr>
															<td>
																<table cellPadding="0" cellSpacing="0"
																	style={{verticalSpacing: '-webkit-baseline-middle', fontSize: 'medium', fontFamily: 'Arial', display: 'inline-block'}}>
																	<tbody>
																		<tr style={{textAlign: 'right'}}>
																			{ this.props.socialFacebook &&
																				<React.Fragment>
																					<td>
																						<a href={ `https://${ this.props.socialFacebook }` } color="#6A78D1"
																							style={{display: 'inline-block', padding: '0px', backgroundColor: 'rgb(106, 120, 209)'}}>
																							<img height="24" className="sc-csuQGl CQhxV"
																								src="https://cdn2.hubspot.net/hubfs/53/tools/email-signature-generator/icons/facebook-icon-2x.png"
																								alt="facebook" color="#6A78D1"
																								style={{backgroundColor: 'rgb(106, 120, 209)', maxWidth: '135px', display: 'block'}} />
																						</a>
																					</td>
																					<td width="5"></td>
																				</React.Fragment>
																			}
																			{ this.props.socialTwitter &&
																				<React.Fragment>
																					<td>
																						<a href={ `https://${ this.props.socialTwitter }` } color="#6A78D1"
																							style={{display: 'inline-block', padding: '0px', backgroundColor: 'rgb(106, 120, 209)'}}>
																							<img height="24" className="sc-csuQGl CQhxV"
																								src="https://cdn2.hubspot.net/hubfs/53/tools/email-signature-generator/icons/twitter-icon-2x.png"
																								alt="twitter" color="#6A78D1"
																								style={{backgroundColor: 'rgb(106, 120, 209)', maxWidth: '135px', display: 'block'}} />
																						</a>
																					</td>
																					<td width="5"></td>
																				</React.Fragment>
																			}
																			{ this.props.socialLinkedin &&
																				<React.Fragment>
																					<td>
																						<a href={ `https://${ this.props.socialLinkedin }` } color="#6A78D1"
																							style={{display: 'inline-block', padding: '0px', backgroundColor: 'rgb(106, 120, 209)'}}>
																							<img height="24" className="sc-csuQGl CQhxV"
																								src="https://cdn2.hubspot.net/hubfs/53/tools/email-signature-generator/icons/linkedin-icon-2x.png"
																								alt="linkedin" color="#6A78D1"
																								style={{backgroundColor: 'rgb(106, 120, 209)', maxWidth: '135px', display: 'block'}} />
																						</a>
																					</td>
																					<td width="5"></td>
																				</React.Fragment>
																			}
																			{ this.props.socialInstagram &&
																				<React.Fragment>
																					<td>
																						<a href={ `https://${ this.props.socialInstagram }` } color="#6A78D1"
																							style={{display: 'inline-block', padding: '0px', backgroundColor: 'rgb(106, 120, 209)'}}>
																							<img height="24" className="sc-csuQGl CQhxV"
																								src="https://cdn2.hubspot.net/hubfs/53/tools/email-signature-generator/icons/instagram-icon-2x.png"
																								alt="instagram" color="#6A78D1"
																								style={{backgroundColor: 'rgb(106, 120, 209)', maxWidth: '135px', display: 'block'}} />
																						</a>
																					</td>
																					<td width="5"></td>
																				</React.Fragment>
																			}
																		</tr>
																	</tbody>
																</table>
															</td>
														</tr>
													}
												</tbody>
											</table>
										</td>
									</tr>
								</tbody>
							</table>
							<table cellPadding="0" cellSpacing="0"
								style={{verticalSpacing: '-webkit-baseline-middle', fontSize: 'medium', fontFamily: 'Arial', width: '100%'}}>
								<tbody>
									<tr>
										<td height="30"></td>
									</tr>
									<tr>
										<td height="1" className="sc-bRBYWo ccSRck" color="#F2547D" direction="horizontal"
											style={{width: '100%', borderBottom: '1px solid rgb(242, 84, 125)', borderLeft: 'none', display: 'block'}}>
										</td>
									</tr>
									<tr>
										<td height="30"></td>
									</tr>
								</tbody>
							</table>
						</td>
					</tr>
				</tbody>
			</table>
		)
	}
}